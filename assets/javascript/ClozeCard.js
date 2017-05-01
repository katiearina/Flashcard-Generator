var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "..."); 
		// function() {
		// var str = this.fullText; 
		// var res = str.replace(this.cloze, "...");
		// console.log(res);
	// };
};

var clozeCardArray = [
	{
		text: "When I am king, you will be first against the wall with your opinion / Which is of no consequence at all.",
		cloze: "wall"
	},
	{
		text: "Karma police, arrest this man / He talks in maths / He buzzes like a fridge / He’s like a detuned radio.",
		cloze: "fridge"
	},
	{
		text: "Ice age coming, throw him in that fire / We’re not scaremongering / This is really happening.",
		cloze: "fire"
	},
	{
		text: "This is my final fit, my final bellyache / With no alarms and no surprises.",
		cloze: "alarms"
	},
	{
		text: "y thoughts are misguided and a little naive / I twitch and I salivate like with myxomatosis / You should put me in a home or you should put me down.",
		cloze: "twitch"
	},
	{
		text: "It’s the devil’s way now / There is no way out / You can scream and you can shout / It is too late now.",
		cloze: "devil"
	}
]

var array = [];

function runClozeCards() {
for (var i = 0; i < clozeCardArray.length; i++){
var test = new ClozeCard(clozeCardArray[i].text, clozeCardArray[i].cloze);
	array.push(test);
	// test.partial();
	console.log(array[i].partial);
}
};

// console.log(array);

module.exports = ClozeCard;
module.exports = runClozeCards;

runClozeCards();