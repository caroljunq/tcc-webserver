const db = require("./db");
const Scans = require('./models/scan');
const getdata = require('./models/datamining')
const getinfo = require('./models/getInfoZones')
const fileUpload = require('express-fileupload');


module.exports = function(app) {

    app.use(fileUpload());

    app.get('/', (req, res) => {
        // render `zones.ejs` with the list of posts
        res.render('zones')
    })

    app.get('/comparing/:zone', function(req, res) {
        let zone = req.params.zone;
       	Scans.find({'zone':zone}).lean().exec(
          	function (err, docs) {
				if(err){
				   res.render('error',{message:err.message,error: err});
					return;
				}
				if(docs.length > 0){
					let obj = getdata("",docs);
					let arrayData = [];

					for(let i = 0; i < obj.days.length; i++){
						let temp = getdata(obj.days[i].toString(),docs);
						arrayData.push(temp);
					};
					let arrayObj = getinfo(arrayData);
					res.render('comparing',{obj: arrayObj});
				}else{
					let err2 = {
						status: '404 Not Found'
					}
					res.render('error',{message:"Sorry, Moongoose didn't find any document.",error: err2});
				}
      	});
    });

    app.get('/statistics/:zone', function(req, res) {
      	let zone = req.params.zone;
      	Scans.find({'zone':zone}).lean().exec(
        	function (err, docs) {
				if(err){
					res.render('error',{message:err.message,error: err});
					return;
				}
				if(docs.length > 0){
					let obj = getdata("",docs);
					res.render('statistics', {obj: obj});
				}else{
					let err2 = {
						status: '404 Not Found'
					}
					res.render('error',{message:"Sorry, Moongoose didn't find any document.",error: err2});
				}
    		});
    });

     app.get('/statistics/:zone/:year/:month/:day', function(req, res) {
        let zone = req.params.zone;
        let day = req.params.day;
        let month = req.params.month;
        let year = req.params.year;
        let period = year+'-'+month+'-'+day;
        Scans.find({'zone':zone,'day': year+'-'+month+'-'+day}).lean().exec(
            function (err, docs) {
	            if(err){
				    res.render('error',{message:err.message,error: err});
					return;
				}
                if(docs.length > 0){
                    let obj = getdata(period,docs);
        			res.render('statistics', {obj: obj})
                }else{
					let err2 = {
						status: '404 Not Found'
					}
					res.render('error',{message:"Sorry, Moongoose didn't find any document.",error: err2});
			    }
          	});
    });

    app.post('/upload', function(req, res) {

        // if (!req.files)
        //     return res.status(400).send('No files were uploaded.');

        //The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        // let sampleFile = req.files.sampleFile;

        //Use the mv() method to place the file somewhere on your server
        console.log(req.files.data.data)
        // sampleFile.mv('./app/uploads/'+sampleFile.name, function(err) {
        //     if (err)
        //         return res.status(500).send(err);
        // });
    });

}
