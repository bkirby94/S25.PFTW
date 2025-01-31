// Games Array
const myGameArray  = [
    {
        title: "Hues and Cues",
        type: "Board",
        numberOfPlayers: "3-10",
        rating: 4.5,
        shortDescription: "Players try to get other players to guess the color on their card based on one-word and two-word clues. Points are given based on how close the guesses are to the actual color.",
    },

    {
        title: "Play Nine",
        type: "Card",
        numberOfPlayers: "2-6",
        rating: 4,
        shortDescription: "Quick, casual, and fun! It is referred to as the card game of gulf, but no need to be a gulf lover!",
    },

    {
        title: "That Sound Game",
        type: "Party",
        numberOfPlayers: "3-10",
        rating: 4.2,
        shortDescription: "This is a fast-paced, interactive and very noisy party game. The goal is to get your team to guess as many answers on the category cards as they can in a minute.",
    }
];

// Prompt for user to pick number
const gameInput = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

// Validate input number
if (gameInput >= 1 && gameInput <= 3) {

// Display information about the input game
window.alert("You selected " + myGameArray[gameInput - 1].title + " which is a " + myGameArray[gameInput - 1].type + " game. I have rated this game " + myGameArray[gameInput - 1].rating + " out of 5. This game allows " + myGameArray[gameInput - 1].numberOfPlayers + " players. Here is a brief description: " + myGameArray[gameInput - 1].shortDescription);
};