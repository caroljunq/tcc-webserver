const db = require("./db");
const Scans = require('./models/scan');
const getdata = require('./models/datamining')

module.exports = function(app) {

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
                  let obj = getdata(period,docs);
                  res.render('statistics', {obj: obj})
              }else{
                  console.log("Error! " + err.message);
                  return err;
              }
          });
       });
}
