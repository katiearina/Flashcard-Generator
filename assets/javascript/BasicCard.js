//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
var inquirer = require("inquirer");

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.playCards = function() {
		inquirer.prompt([
			{
				name: "question",
				message: this.front
			},

	]).then(function(user) {
		console.log(this.back);
		if (user.question === this.back) {
			console.log("You got it right!");
		}
		else {
			console.log("The correct answer was: " + this.back);
		}
});
	};
};

var shakespeareBasic = new CardsChoice("basic");

shakespeareBasic.addBasicCards("Test One", "Book One");
shakespeareBasic.addBasicCards("Test Two", "Book Two");
shakespeareBasic.addBasicCards("Test Three", "Book Three");

for (var i = 0; i < shakespeareBasic.cards.length ; i++) {
console.log(shakespeareBasic.cards[i].front);
}


module.exports = BasicCard;
//---------------------------------------------------------------------------
// FUNCTION CALLS!