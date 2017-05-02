var inquirer = require("inquirer");

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

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

var basicConstructorArray = [];

for (var i = 0; i < basicCardArray.length; i++) {
	var newCard = new BasicCard(basicCardArray[i].front, basicCardArray[i].back);
	basicConstructorArray.push(newCard);
}

var cardCount = 0;

function runBasicCards() {
	if (cardCount < basicCardArray.length) {

	console.log("==============================");
		inquirer.prompt([
			{
				name: "basiccard",
				message: basicConstructorArray[cardCount].front
			},
		]).then(function(user) {
			if (user.basiccard.toUpperCase() === basicConstructorArray[cardCount].back.toUpperCase()) {
				console.log("============================== \nYou got it right!");
			}
			else {
				console.log("============================== \nAw, dang!\nThe correct answer was actually: " + 
					basicConstructorArray[cardCount].back.toUpperCase());
			}

	cardCount++;

	runBasicCards();

		});

}
	else {
		console.log("==============================\n\nYou've gone through all the flashcards! Great work! Shakespeare would be proud of you!\n\n==============================");
		inquirer.prompt([

	{
		type: "list",
		name: "yesNo",
		message: "Would you like to play again?",
		choices: ["Yep!", "No, thank you!"]
	}

]).then(function(user) {

	if (user.yesNo === "Yep!") {
		console.log("Okay! Type 'node runCards.js' in the terminal to run the game again!");
	}

	else if (user.yesNo === "No, thank you!")  {
		console.log("Okay! Type 'clear' in the terminal to clear out any remaining flashcard information.");
	}
});
	}
};

module.exports = BasicCard;
module.exports = runBasicCards();