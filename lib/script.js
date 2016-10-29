var CharIsOneByte = "James Kim Is Awesome"
var hasManyBytes = "Ôåµ´ß ˆµ ˆß Å∑´ßøµ";

module.exports = {
	lineCount: function(d) {
		var line = d.split(/\r*\n/);
		return line.length;
	},
	wordCount: function(d) {
		return d.length;
	},
	byteCount: function(d) {
		return Buffer.byteLength(d, 'utf-8');
	}
};