var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.getPartial = function() {
		var str = this.fullText; 
		var res = str.replace(this.cloze, "...");
		console.log(res);
	};
};


var test = new ClozeCard("I've got a lovely bunch of coconuts", "bunch");

test.getPartial();

module.exports = ClozeCard;