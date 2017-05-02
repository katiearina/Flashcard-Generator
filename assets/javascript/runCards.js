var inquirer = require("inquirer");
// var BasicCard = require("./BasicCard.js");
// var ClozeCard = require("./ClozeCard.js");

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// var CardsChoice = function(type) {
// 	this.cards = [];
// 	this.type = type;

// 	this.cardType = function() {
inquirer.prompt([

	{
		type: "list",
		name: "whatType",
		message: "What type of flashcard would you like?",
		choices: ["Basic cards, please!", "I'm advanced, give me those cloze cards"]
	}

	]).then(function(user) {

	if (user.whatType === "Basic cards, please!") {
		console.log("Basic bee");

	// this.addBasicCards = function(front, back) {
	// 	this.cards.push(new BasicCard(front, back));
	// };
	}

	else {
		console.log("Cloze, eh? Okay!");
		var ClozeCard = require("./ClozeCard.js");
		ClozeCard;
	}
		// this.cards.push(new ClozeCard(text, cloze));
	});
// };
// };

// CardsChoice.cardType();

// var userChoice = new CardsChoice();

// module.exports = CardsChoice;

// Created a series of questions
// inquirer.prompt([

// 	{
// 		type: "list",
// 		name: "whatType",
// 		message: "What type of flashcard would you like?",
// 		choices: ["Basic cards, please!", "I'm advanced, give me those cloze cards"]
// 	}

// ]).then(function(user) {

// 	// If the user guesses the password...
// 		if (user.whatType === "Basic cards, please!") {
// 			console.log("==============================================");
// 			console.log("You've chosen Basic Cards! Great choice!")
// 			console.log("==============================================");
// 			BasicCard.playCards();
// 		}

//   // If the user doesn't guess the password...
// 		else if (user.whatType === "I'm advanced, give me those cloze cards") {
// 			console.log("==============================================");
// 			console.log("You've chosen Cloze Cards! Great choice!")
// 			console.log("==============================================");
// 			// ClozeCard.playCards();
// 		}
// });