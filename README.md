# Memory Card

Memory card game built using react. This project is following the odin project.

# Pokémon Memory Card Game

A React memory card game built for The Odin Project. The goal is to click every Pokémon card once without clicking the same card twice. After each click, the cards shuffle into a new order, making it harder to remember which cards have already been selected.

## DEMO
[Live Preview](https://memorycard.taylorv0004.workers.dev/)

## Features

- Fetches Pokémon data from the PokéAPI
- Displays a set of Pokémon cards with images and names
- Tracks the current score
- Tracks the best score
- Shuffles cards after each successful click
- Resets the game when the player clicks a card twice
- Shows a win screen after all cards have been clicked once
- Includes a hard mode that unlocks after winning

## How to Play

1. Click a Pokémon card.
2. The cards will shuffle after each click.
3. Do not click the same Pokémon twice.
4. Click every card once to win.
5. After winning, you can replay normally or try hard mode.

## Hard Mode

Hard mode is unlocked after winning the normal game. In hard mode, the cards are visually obfuscated If the player loses during hard mode, they must win the normal mode again before trying hard mode.

## Built With

- React
- JavaScript
- CSS
- PokéAPI
