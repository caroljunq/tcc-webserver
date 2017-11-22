const request = require('request');
const Scans = require('./scan');
const mongoose = require('mongoose');

module.exports = prepareData = (fileName,fileText) => {
	return new Promise((res,rej) => {
		let arr = fileText.split(/\n/);

		let register = fileName.split('_');

		//delete duplicates in array
		let macs = arr.filter((item, pos) => {
		  	return arr.indexOf(item) == pos && item != '';
		});

		let customers = [];

		let aux = [];
		Scans.find({'zone': register[0]},function(err, doc){

			for(let k = 0 ; k < doc.length; k++){
				for(let j = 0; j < doc[k].macs.length; j++){
						aux.push(doc[k].macs[j].mac);
				}
			}

			let zoneMacs = aux.filter((item, pos) => {
		  		return aux.indexOf(item) == pos;
			});

			for(let k = 0; k < macs.length; k++){

				if(zoneMacs.indexOf(macs[k]) == -1){
					customers[k] = false;
				}else{

					customers[k]= true;
				}
			}

			let total = macs.length;
			let count = 0 ;
			let processed = false;
			let time = register[2].replace('-',':');
			let customer = false;

			let scan = new Scans({
				day: register[1],
				hour: time,
				zone: register[0],
				macs: []
			});

			for(let i = 0; i < total; i++){
				request("http://api.macvendors.com/"+macs[i], (error, response, body) => {
					console.log('request')
					let seller = body;
					if(error){
						processed  = true;
						return rej(error);
					}
	  				++count;
	  				scan.macs.push({
	  					mac: macs[i],
	  					vendor: seller,
	  					customer: customers[i]
	  				});
					console.log(scan)
	  				if(!processed && count == total){
	  					processed  = true;
	  					scan.save((err) => {
							console.log('salvei');
	  						if(err){
	  							rej(err);
	  						}
	  						res(scan);
	  					});
	  				}
				});
			}
		});
	});

}
