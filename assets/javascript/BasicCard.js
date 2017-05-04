// Require NPM Inquirer Package
var inquirer = require("inquirer");

// Set up BasicCard constructor
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

// Created a sample basic card array
var basicCardArray = [
	{
		front: "You speak an infinite deal of nothing.",
		back: "The Merchant of Venice"
	},
	{
		front: "Though this be madness, yet there is method in 't.",
		back: "Hamlet"
	},
	{
		front: "Better a witty fool, than a foolish wit.",
		back: "Twelfth Night"
	},
	{
		front: "'I can see he's not in your good books,' said the messenger. 'No, and if he were I would burn my library.'",
		back: "Much Ado About Nothing"
	},
	{
		front: "I will wear my heart upon my sleeve for daws to peck at.",
		back: "Othello"
	},
	{
		front: "No, sir, I do not bite my thumb at you, sir, but I bite my thumb, sir.",
		back: "Romeo and Juliet"
	},
	{
		front: "Hell is empty and all the devils are here.",
		back: "The Tempest"
	},
	{
		front: "By the pricking of my thumbs, something wicked this way comes.",
		back: "Macbeth"
	},
	{
		front: "If I be waspish, best beware my sting.",
		back: "The Taming of the Shrew"
	}
]

// Sets up blank array for turning array into constructors
var basicConstructorArray = [];

// For each item in the basic card array, create a new BasicCard from constructor and push into constructor array
for (var i = 0; i < basicCardArray.length; i++) {
	var newCard = new BasicCard(basicCardArray[i].front, basicCardArray[i].back);
	basicConstructorArray.push(newCard);
}

// Set initial card (play) count at 0.
var cardCount = 0;

// Function to run basic cards (recursive)
function runBasicCards() {

	// If card play count is less than the length of the number of cards in the array..
	if (cardCount < basicCardArray.length) {

	console.log("==============================");

		// Show front of card
		inquirer.prompt([
			{
				name: "basiccard",
				message: basicConstructorArray[cardCount].front + "\n"
			},

		]).then(function(user) {

			// If user's input matches back of card, let them know they got it.
			if (user.basiccard.toUpperCase() === basicConstructorArray[cardCount].back.toUpperCase()) {
				console.log("============================== \nYou got it right!");
			}

			// If not, tell user they didn't get it and let them know the correct answer (all caps so it stands out in the Terminal).
			else {
				console.log("============================== \nAw, dang!\nThe correct answer was actually: " + 
					basicConstructorArray[cardCount].back.toUpperCase());
			}

	// Increase card play count
	cardCount++;

	// Run function again (recursion!)
	runBasicCards();

		});

}

	// Once user has gone through all the cards, let them know!
	else {
		console.log("==============================\n\nYou've gone through all the flashcards! Great work! Shakespeare would be proud of you!\n\n==============================");

		// Ask if they'd like to play again.
		inquirer.prompt([
			{
				type: "list",
				name: "yesNo",
				message: "Would you like to play again?",
				choices: ["Yep!", "No, thank you!"]
			}

		]).then(function(user) {

			// If yes, tell them what to enter to do so (tried to call function from runCards.js but kept running into duplication issues and not-running-anything issues
			// so this works, if not quite right. I hope to fix this eventually.)
			if (user.yesNo === "Yep!") {
				console.log("Okay! Type 'node runCards.js' in the terminal to run the game again!\n-------------------------");
			}

			// If no, tell them what to enter to remove text from the Terminal.
			else if (user.yesNo === "No, thank you!")  {
				console.log("Okay! Type 'clear' in the terminal to clear out any remaining flashcard information.\n-------------------------");
			}
		});
			}
		};

// Export constructor and function to be called in runCards.js.
module.exports = BasicCard;
module.exports = runBasicCards();