const request = require('request');
const Scans = require('./scan');

module.exports = prepareData = (fileName,fileText) => {
	console.log('estou na preparacao')
	return new Promise((res,rej) => {
		let arr = fileText.split(/\n/);

		let register = fileName.split('_');

		//delete duplicates in array
		let macs = arr.filter((item, pos) => {
		  	return arr.indexOf(item) == pos && item != ''; 
		});

		let total = macs.length;
		let count = 0 ;
		let processed = false;
		let time = register[2].replace('-',':');
		let scan = new Scans({
			day: register[1],
			hour: time,
			zone: register[0],
			macs: []
		});

		for(let i = 0; i < total; i++){
			request("http://api.macvendors.com/"+macs[i], (error, response, body) => {
				let seller = body.split(' ');
				if(error){
					processed  = true;
					return rej(error);
				}
  				++count;
  				scan.macs.push({
  					mac: macs[i],
  					vendor: seller[0]
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