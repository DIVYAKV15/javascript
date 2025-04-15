// program to shuffle the deck of cards
//step 1: Initialize Data
//1:Define a list of card name: 
const suits = ['spades', 'diamond', 'club', 'heart']
//2.Define a list of card numbers:
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "Queen", "King"]
//3.empty array to  store the cards
let deck = [];
//Step 2: Create the Full Deck (52 cards)
//Loop through each suit:

// For each suit, loop through each value:

// Create a card object with:

// value = current value

// suit = current suit

// Add (push) the card object to the deck.

for (let i = 0; i < suits.length; i++) { //0<4
    for (j = 0; j < values.length; j++) { //0<13
        let card = { value: values[j], suit: suits[i] }; // {values:ace,suit:spades}
        deck.push(card) //adding this in deck
    }
    //At the end of this step, the deck contains 52 card objects.

}

//Step 3: shuffle the cards
//Loop from the last index to the first index (excluding index 0):
// Generate a random index j from 0 to i - 1

// Swap the cards at positions i and j in the deck


for (let i = deck.length - 1; i > 0; i--) {//i=51 51>0
    let j = Math.floor(Math.random() * i);// Math.random() generates a random number between 0 and 1, convert that without float and * 51 eg:5
    let temp = deck[i]   // Store the current card at position i temp=deck[51]
    deck[i] = deck[j]//Swap the card at position i with the card at position j deck[52]=deck[5]
    deck[j] = temp//Place the stored card at position j deck[5]=deck[51]
    console.log(deck[i]);
    
}
console.log('The first five cards are:');
// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].value} of ${deck[i].suit}`)
}

