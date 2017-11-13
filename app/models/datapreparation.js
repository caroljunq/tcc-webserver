const request = require("request");
const Scans = require('./scan');

	module.exports = prepareData = (fileText) => {

		return new Promise((res,rej) => {
			let arr = fileText.split(/\r\n/);

			let macs = arr.filter(function(item, pos){
		  		return arr.indexOf(item) == pos && item != ''; 
			});

			let total = macs.length;
			let count = 0 ;
			let processed = false;
			let scan = new Scans({
				day: '2017-10-23',
				hour: '10:00',
				zone: 'LTIA',
				macs: []
			});

			for(let i = 0; i < total; i++){
				request("http://api.macvendors.com/"+macs[i], function(error, response, body) {
					if(error){
						console.log('maoe1');
						processed  = true;
						return rej(error);
					}
  					++count;
  					scan.macs.push({
  						mac: macs[i],
  						vendor: body
  					})

  					if(!processed && count== total){
  						console.log('maoe2');
  						processed  = true;
  						scan.save(function(err){
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