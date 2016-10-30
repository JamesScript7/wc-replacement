//word count format:
//newline	word	byte filename.js

var fs = require("fs"),
	fn = require("./lib/script"),
	target = "./lib/script.js";

fs.readFile(target, "utf-8", function(err,data) {
	if(err) {
		console.log(err.toString());
		return;
	} else {
		var lines = fn.lineCount(data),
			words = fn.charCount(data),
			bytes = fn.byteCount(data),
			targetFile = target.split("/")[2];
			
		console.log("\t" + lines + "\t" + words + "\t" + bytes + " " + targetFile);
	}
});