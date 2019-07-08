const fs = require("fs");
fs.readFile("nodejs/out.txt",{"encoding":"utf-8"},function(err,data){
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})
var res = fs.readFileSync("nodejs/out.txt",{"encoding":"utf-8"})
console.log(res);