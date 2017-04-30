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
		console.log(question2.back);
		if (user.question === question2.back) {
			console.log("You got it right!");
		}
		else {
			console.log("The correct answer was: " + question2.back);
		}
});
	};
};


module.exports = BasicCard;
//---------------------------------------------------------------------------
// FUNCTION CALLS!