const mongoose = require("mongoose");
mongoose.connect("mongodb://teste:teste123@ds113825.mlab.com:13825/t",function(err){
    if(err){
        console.log(err);
    }
});
