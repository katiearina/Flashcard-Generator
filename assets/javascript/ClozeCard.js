var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.getPartial = function() {
		var str = this.text; 
		var res = str.replace(this.cloze, " ... ");
		console.log(res);
	};
};



module.exports = ClozeCard;