var inquirer = require("inquirer");

var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "..."); 
};

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

var clozeConstructorArray = [];

for (var i = 0; i < clozeCardArray.length; i++) {
	var newCard = new ClozeCard(clozeCardArray[i].text, clozeCardArray[i].cloze);
	clozeConstructorArray.push(newCard);
}

var cardCount = 0;

function runClozeCards() {
	if (cardCount < clozeCardArray.length) {

	console.log("==============================");
		inquirer.prompt([
			{
				name: "flashcard",
				message: clozeConstructorArray[cardCount].partial
			},
		]).then(function(user) {
			if (user.flashcard.toUpperCase() === clozeConstructorArray[cardCount].cloze.toUpperCase()) {
				console.log("============================== \nYou got it right!\n-------------------------\n" + 
					clozeConstructorArray[cardCount].fullText);
			}
			else {
				console.log("============================== \nAw, dang!\nThe correct answer was actually: " + 
					clozeConstructorArray[cardCount].cloze.toUpperCase() + "\n-------------------------\n" + clozeConstructorArray[cardCount].fullText);
			}

	cardCount++;

	runClozeCards();

		});

}
	else {
		console.log("==============================\n\nYou've gone through all the flashcards! Great work! Thom Yorke would be proud of you!\n\n==============================");
		inquirer.prompt([

	{
		type: "list",
		name: "yesNo",
		message: "Would you like to play again?",
		choices: ["Yep!", "No, thank you!"]
	}

]).then(function(user) {

	if (user.yesNo === "Yep!") {
		console.log("Okay! Type 'node runCards.js' in the terminal to run game again!");
	}

	else if (user.yesNo === "No, thank you!")  {
		console.log("Okay! Type 'clear' in the terminal to clear out any remaining flashcard information.");
	}
});
	}
};

module.exports = ClozeCard;
module.exports = runClozeCards();