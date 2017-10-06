const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// routes ==================================================
require('./config/routes')(app); // configure our routes

app.set('views',  './app/views');
app.set('view engine', 'ejs');

app.use(fileUpload());

app.use('/public', express.static(__dirname + '/public'));

app.post('/', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  // let today = new Date();
  // let date = today.getDate() +"-" + (today.getMonth()+1)+ "-" + today.getFullYear()+ "_"+ today.getHours()+ "-" + today.getMinutes()+ "-" + today.getSeconds();

  sampleFile.mv(sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);
  });
});

app.listen(3000, function () {
  console.log('Listening on 3000!')
})
