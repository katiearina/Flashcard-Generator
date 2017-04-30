//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
var inquirer = require("inquirer");

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
};

// Apply printCard function to all BasicCard objects
BasicCard.prototype.printCard = function() {
	console.log("?: " + this.front);
};

var question1 = new BasicCard("You speak an infinite deal of nothing.", "The Merchant of Venice");
var question2 = new BasicCard("Sweets to the sweet.", "Hamlet");
var question3 = new BasicCard("Better a witty fool, than a foolish wit.", "Twelfth Night");
var question4 = new BasicCard("Some Cupid kills with arrows, some with traps.", "Much Ado About Nothing");
var question5 = new BasicCard("Educated men are so impressive!", "Romeo and Juliet");
var question6 = new BasicCard("By the pricking of my thumbs, something wicked this way comes.", "Macbeth");
var question7 = new BasicCard("There's meaning in thy snores.", "The Tempest");
var question8 = new BasicCard("If I be waspish, best beware my sting.", "The Taming of the Shrew");

function playCards() {
inquirer.prompt([
	{
		name: "question1",
		message: question1.front
	},

	]).then(function(user) {
		if (user.question1.toUpperCase() === question1.back.toUpperCase()) {
			console.log("You got it right!");
		}
		else {
			console.log("The correct answer was: " + question1.back.toUpperCase());
		}
});
};


//---------------------------------------------------------------------------
// FUNCTION CALLS!