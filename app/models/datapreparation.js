const request = require("request");

module.exports = prepareData = (fileText) => {
	let arr = fileText.split(/\r\n/);

	let newMacs = arr.filter(function(item, pos){
  		return arr.indexOf(item) == pos && item != ''; 
	});

}