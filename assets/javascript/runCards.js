// Require NPM Inquirer Package
var inquirer = require("inquirer");

// Creates function to run cards
function playCards() {

// Calls inquirer
inquirer.prompt([

	// Asks user for input re: which type of flashcard they want
	{
		type: "list",
		name: "whatType",
		message: "What type of flashcard would you like?",
		choices: ["Basic cards, please!", "I'm advanced, give me those cloze cards!"]
	}

]).then(function(user) {

	// If user wants basic cards..
	if (user.whatType === "Basic cards, please!") {
		console.log("Basic? Alright. 'To thine own self be true.'\n-------------------------\nName the title of the Shakespeare work for each quote");

		// Require BasicCard.js file (if I called this/the variable below anywhere else, I got weird duplicate text. I'd love to know more about
		// calling/exporting functions from a file with the constructor in it, because it seems tricky at best..).
		var BasicCard = require("./BasicCard.js");

		// Run BasicCard.js file
		BasicCard;
	}

	// If user wants cloze cards..
	else if (user.whatType === "I'm advanced, give me those cloze cards!")  {
		console.log("Cloze, eh? Okay!\n-------------------------\nFill in the blanks in these Radiohead lyrics");

		// Require ClozeCard.js file 
		var ClozeCard = require("./ClozeCard.js");

		// Run ClozeCard.js file 
		ClozeCard;
	}
});
};

playCards();

// Tried to export this to run a second (or third, or fourth..) game
// in ClozeCard but I either got nothing returning or duplicate items, depending on how
// I structured my code. Exporting/calling functions is still weird at best
// to me, so that would be something I would try to add in the future.