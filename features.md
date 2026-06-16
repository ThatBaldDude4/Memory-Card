# Features to add

## Data
- Current score counter
- Best score tracker

## Card Behavior
- Data sourced from external api
- Upon click card positions get shuffled


## Structure

<App>
    <CardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </CardContainer>
</App>


## Component Structure

### App Structure
- Holds best && current score
- Holds Card Container
- Holds current clicked cards: [{card1, id}, {card3, id}, ...] / [1, 3, 5, (cards id)]
- Handle card click event

### Card Container Structure
- Receives Card data
- Maps over card data to create card components
- Passes down click event handler to card

### Card Structure
- Receives click event function
- Displays image with text

## Game Logic

### On card click
- If card ID has been clicked before:
    - reset current score
    - clear clickedCards array
    - shuffle cards
- Else: 
    - add card ID to clickedCards
    - Increment current score
    - Update best score (if applicable)
    - Shuffle Cards


## Needs thought
- What controls data fetching?
- Where should fetched data live (likely top level parent, App/Card Container)
- What API to use for data


## Potential Features
- Win game screen (click all cards once without mistake)
- New best score notification
- Continue round (ie beat game, instead of force reset continue with new cards)