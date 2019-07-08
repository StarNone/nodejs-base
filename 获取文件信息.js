var fs = require("fs");
fs.stat("nodejs/write.txt",function(err,stats){
    if(err){
        console.log(err)
    } else {
        console.log(stats);
    }
})