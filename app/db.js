const mongoose = require("mongoose");
const promise = require('bluebird');

mongoose.Promise = promise;
mongoose.connect("mongodb://teste:teste123@ds113825.mlab.com:13825/gsmart",{ useMongoClient: true },function(err){
    if(err)
        console.log(err);
});
