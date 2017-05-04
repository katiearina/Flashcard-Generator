// Require NPM Inquirer Package
var inquirer = require("inquirer");

// Set up ClozeCard constructor
var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;

	if (this.fullText.indexOf(this.cloze) >= 0) {
		// This creates the partial flashcard with the cloze word/text replaced with "..."
		this.partial = this.fullText.replace(this.cloze, "...");
	}
	// Alert user there is an error (this requirement seems most important for user-generated input. Since my homework is not
	// really structured in that way, it's an odder thing to implement? I would do this totally differently with user-generated
	// input but do not have time to implement that in my homework with the time I have remaining).
	else {
		console.log("ERROR");
	}
};

// Created a sample cloze card array
var clozeCardArray = [
	{
		text: "'When I am king, you will be first against the wall with your opinion / Which is of no consequence at all.' -- Paranoid Android",
		cloze: "wall"
	},
	{
		text: "'Karma police, arrest this man / He talks in maths / He buzzes like a fridge / He’s like a detuned radio.' -- Karma Police",
		cloze: "fridge"
	},
	{
		text: "'Ice age coming, throw him in that fire / We’re not scaremongering / This is really happening.' -- Idioteque",
		cloze: "fire"
	},
	{
		text: "'This is my final fit, my final bellyache / With no alarms and no surprises.' -- No Surprises",
		cloze: "alarms"
	},
	{
		text: "'My thoughts are misguided and a little naive / I twitch and I salivate like with myxomatosis / You should put me in a home or you should put me down.' -- Myxomatosis",
		cloze: "twitch"
	},
	{
		text: "'Pull me out of the aircrash / Pull me out of the lake / I’m your superhero, we are standing on the edge.' -- Lucky",
		cloze: "lake"
	},
	{
		text: "'Blame it on the black star / Blame it on the falling sky / Blame it on the satellite that beams me home.' -- Black Star",
		cloze: "satellite"
	},
	{
		text: "'This is a low flying panic attack / Sing the song of sixpence that goes / Burn the witch / We know where you live.' -- Burn the Witch",
		cloze: "sixpence"
	},
	{
		text: "'It’s the devil’s way now / There is no way out / You can scream and you can shout / It is too late now.' -- 2 + 2 = 5",
		cloze: "devil"
	}
]

// Sets up blank array for turning array into constructors
var clozeConstructorArray = [];

// For each item in the cloze card array, create a new ClozeCard from constructor and push into constructor array
for (var i = 0; i < clozeCardArray.length; i++) {
	var newCard = new ClozeCard(clozeCardArray[i].text, clozeCardArray[i].cloze);
	clozeConstructorArray.push(newCard);
}

// Set initial card (play) count at 0.
var cardCount = 0;

// Function to run cloze cards (recursive)
function runClozeCards() {

	// If card play count is less than the length of the number of cards in the array..
	if (cardCount < clozeCardArray.length) {

	console.log("==============================");

		// Show partial/cloze statement
		inquirer.prompt([
			{
				name: "flashcard",
				message: clozeConstructorArray[cardCount].partial + "\n"
			},

		]).then(function(user) {

			// If user's input matches cloze (removed) text, let them know they got it and then display full text (including cloze text).
			if (user.flashcard.toUpperCase() === clozeConstructorArray[cardCount].cloze.toUpperCase()) {
				console.log("============================== \nYou got it right!\n-------------------------\n" + 
					clozeConstructorArray[cardCount].fullText);
			}

			// If not, tell user they didn't get it but still display full text (including cloze text).
			else {
				console.log("============================== \nAw, dang!\nThe correct answer was actually: " + 
					clozeConstructorArray[cardCount].cloze.toUpperCase() + "\n-------------------------\n" + clozeConstructorArray[cardCount].fullText);
			}

	// Increase card play count
	cardCount++;

	// Run function again (recursion!)
	runClozeCards();

		});

}
	// Once user has gone through all the cards, let them know!
	else {
		console.log("==============================\n\nYou've gone through all the flashcards! Great work! Thom Yorke would be proud of you!\n\n==============================");

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
				console.log("Okay! Type 'node runCards.js' in the terminal to run game again!\n-------------------------");
			}

			// If no, tell them what to enter to remove text from the Terminal.
			else if (user.yesNo === "No, thank you!")  {
				console.log("Okay! Type 'clear' in the terminal to clear out any remaining flashcard information.\n-------------------------");
			}
		});
			}
		};

// Export constructor and function to be called in runCards.js.
module.exports = ClozeCard;
module.exports = runClozeCards();