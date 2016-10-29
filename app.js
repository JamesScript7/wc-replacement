//word count format:
//newline	word	byte filename.js

var fs = require("fs");
var fn = require("./lib/script");


fs.readFile("./lib/script.js", "utf-8", function(err,data) {
	if(err) {
		console.log(err.toString());
		return;
	} else {
		var lines = fn.lineCount(data),
			words = fn.wordCount(data),
			bytes = fn.byteCount(data),
			//not sure how to grab the file name as param?
			fileName = "script.js"
			
		console.log("\t" + lines + "\t" + words + "\t" + bytes + " " + fileName);
	}
});
