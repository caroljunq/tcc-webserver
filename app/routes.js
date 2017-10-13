const db = require("./db");
const Scans = require('./models/scan');
const getdata = require('./models/datamining')

module.exports = function(app) {

    let teste = {
        zone: 'LTIA',
        peak: 50, visitors: 80,
        customers: 20,
        totalPeople: 100,
        vendor: 'Apple',
        dayAverage: 35,
        days: ['23/10/2017','24/10/2017','25/10/2017','26/10/2017','27/10/2017'],
        arrayLine: [45,56,14,23,32,42,20],
        arrayPie: [45,56,85,77,10]
    }

    // // blog home page
    // app.get('/', (req, res) => {
    //     // render `index.ejs` with the list of posts
    //     res.render('zones')
    // })

    app.get('/', (req, res) => {
        // render `zones.ejs` with the list of posts
        res.render('zones')
    })

    app.get('/comparing', (req, res) => {
        // render `comparing.ejs` with the list of posts
        res.render('comparing')
    })

    app.get('/statistics', (req, res) => {
        // render `statistics.ejs` with the list of posts
        res.render('statistics', {obj: teste})
    })

   app.get('/statistics/:zone', function(req, res) {
       let zone = req.params.zone;
        Scans.find({'zone':zone}).lean().exec(
           function (err, docs) {
            if(!err){
                res.send(docs);
            }else{
                console.log("Error! " + err.message);
                return err;
            }
        });
     });

     app.get('/statistics/:zone/:day/:month/:year', function(req, res) {
         let zone = req.params.zone;
         let day = req.params.day;
         let month = req.params.month;
         let year = req.params.year;
         let period = year+'-'+month+'-'+day;
          Scans.find({'zone':zone}).lean().exec(
             function (err, docs) {
              if(!err){
                  let obj = getdata("2017-10-24",docs);
                  res.send(obj);
              }else{
                  console.log("Error! " + err.message);
                  return err;
              }
          });
       });
}
