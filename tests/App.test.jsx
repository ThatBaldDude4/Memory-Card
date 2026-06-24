import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Card from '../src/Card.jsx';
import Game from "../src/Game.jsx";
import WinDialog from "../src/WinDialog.jsx";
import getPokemonData from "../src/pokemonApi.js";

vi.mock("../src/pokemonApi.js");

const mockCard = {
    name: `pika`,
    image: `someUrl`,
    onClick: () => {},
    rotation: 30,
    isHardMode: false
}

describe("Card component", () => {
  it("renders name", () => {
    const name = "pika";
    render(<Card {...mockCard} />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it ("renders image", () => {
    render(<Card {...mockCard}/>);
    expect(screen.getByAltText(`${mockCard.name} pokemon`)).toHaveAttribute("src", mockCard.image)
  })

  it('Calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}/>);

    const card = screen.getByRole('button');
    await user.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});

describe("Game component", () => {
  it ("renders loading screen", () => {
    vi.mocked(getPokemonData).mockReturnValueOnce(new Promise(() => {}));
    render(<Game setIsLoading={vi.fn()}/>)
    const game = screen.getByRole('status');

    expect(game).toHaveTextContent("Catching Pokemon...");
  })

  it("renders score container after loading pokemon data", async () => {
  const mockPokemon = [
    { id: 1, name: "bulbasaur", image: "url1" }
  ];
  
  vi.mocked(getPokemonData).mockResolvedValueOnce(mockPokemon);

  render(<Game setIsLoading={vi.fn()} />);

  const bestScore = await screen.findByTestId("best-score-container");
  expect(bestScore).toHaveTextContent("Best Score: 0");
});
});

describe("WinDialog component", () => {
    it ("renders play again", () => {
        render(<WinDialog handleResetGame={() => {}}/>);
        const button = screen.getByText("Play Again");
        expect(button).toHaveTextContent("Play Again");
    })

    it ("renders hard mode button", () => {
        render(<WinDialog handleResetGame={() => {}}/>);
        const button = screen.getByText("Hard Mode");
        expect(button).toHaveTextContent("Hard Mode");
    });

    it ("play again gets called", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(<WinDialog handleResetGame={handleClick}/>);

        const button = screen.getByText("Play Again");
        await user.click(button);
        await user.click(button);

        expect(handleClick).toHaveBeenCalledWith(false);
    })

    it ("hard mode gets called", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(<WinDialog handleResetGame={handleClick}/>);

        const button = screen.getByText("Hard Mode");
        await user.click(button);
        await user.click(button);

        expect(handleClick).toHaveBeenCalledWith(true);
    })
})