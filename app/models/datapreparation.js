const request = require('request');
const Scans = require('./scan');

module.exports = prepareData = (fileName,fileText) => {

	return new Promise((res,rej) => {
		let arr = fileText.split(/\r\n/);

		let register = fileName.split('_');

		let macs = arr.filter((item, pos) => {
		  	return arr.indexOf(item) == pos && item != ''; 
		});

		let total = macs.length;
		let count = 0 ;
		let processed = false;
		let scan = new Scans({
			day: register[1],
			hour: register[2],
			zone: register[0],
			macs: []
		});

		for(let i = 0; i < total; i++){
			request("http://api.macvendors.com/"+macs[i], (error, response, body) => {
				if(error){
					processed  = true;
					return rej(error);
				}
  				++count;
  				scan.macs.push({
  					mac: macs[i],
  					vendor: body
  				});

  				if(!processed && count == total){

  					processed  = true;
  					scan.save((err) => {
  						if(err){
  							rej(err);
  						}
  						res(scan);
  					});
  				}
			});
		}
	});

}