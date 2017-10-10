const db = require("./db");
const Scans = require('./models/scan');

module.exports = function(app) {

    let teste = {
        zone: 'Zone1', 
        peak: 50, visitors: 80, 
        customers: 20, totalPeople: 100, 
        vendor: 'Apple', dayAverage: 35, 
        days: ['24/10/17','25/10/17','26/10/17','27/10/17','28/10/17'],
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

    // app.get('/statistics', (req, res) => {
    //     // render `statistics.ejs` with the list of posts
    //     res.render('statistics', {obj: teste}) 
    // })

   app.get('/statistics/:zone', function(req, res) {
       let zone = req.params.zone;
        Scans.find({'zone':zone}).lean().exec(
           function (e, docs) {
              res.send(docs);
        });
     });
}