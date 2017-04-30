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

var 


inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
    // Use user feedback for... whatever!! 
});



//---------------------------------------------------------------------------
// FUNCTION CALLS!