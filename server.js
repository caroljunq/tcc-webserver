const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: __dirname+'/app/uploads' }).any();
// routes ==================================================
require('./app/routes')(app); // configure routes

app.set('views',  './app/views');
app.set('view engine', 'ejs');
app.use(upload);

app.use(fileUpload());

app.use('/public', express.static(__dirname + '/public'));

app.use('/controllers', express.static(__dirname + '/app/controllers'));

// catch 404 and forward to error handler --> route not found
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    res.status(404);
    res.render('error', {message: err.message, error: err});
});

// app.post('/', function(req, res) {
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   let sampleFile = req.files.sampleFile;

//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv(sampleFile.name, function(err) {
//     if (err)
//       return res.status(500).send(err);
//   });
// });

app.post('/upload', function(req, res){
    console.log(req.body) // form fields
    console.log(req.files) // form files
    res.status(204).end()
});


app.listen(3000, function () {
    console.log('Listening on 3000!')
})
