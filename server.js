const express = require('express');

const app = express();

// routes ==================================================
require('./app/routes')(app); // configure routes

app.set('views',  './app/views');
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

app.use('/controllers', express.static(__dirname + '/app/controllers'));

// catch 404 and forward to error handler --> route not found
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    res.status(404);
    res.render('error', {message: err.message, error: err});
});

app.listen(3000, function () {
    console.log('Listening on 3000!')
})
