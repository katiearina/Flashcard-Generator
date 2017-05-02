// Load the NPM Package inquirer
var inquirer = require("inquirer");

function playCards() {
inquirer.prompt([

	{
		type: "list",
		name: "whatType",
		message: "What type of flashcard would you like?",
		choices: ["Basic cards, please!", "I'm advanced, give me those cloze cards!"]
	}

]).then(function(user) {

	if (user.whatType === "Basic cards, please!") {
		console.log("Basic? Alright. 'To thine own self be true.'\n-------------------------\nName the title of the Shakespeare work for each quote");
		var BasicCard = require("./BasicCard.js");
		BasicCard;
	}

	else if (user.whatType === "I'm advanced, give me those cloze cards!")  {
		console.log("Cloze, eh? Okay!\n-------------------------\nFill in the blanks in these Radiohead lyrics");
		var ClozeCard = require("./ClozeCard.js");
		ClozeCard;
	}
});
};

playCards();

// Tried to export this to run a second (or third, or fourth..) game
// in ClozeCard but I either got nothing returning or duplicates, depending on how
// I structured my code. Exporting/calling functions is still weird at best
// to me, so that would be something I would try to add in the future.