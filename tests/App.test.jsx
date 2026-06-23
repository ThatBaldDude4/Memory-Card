import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Card from '../src/Card.jsx';

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
// need to get async function working