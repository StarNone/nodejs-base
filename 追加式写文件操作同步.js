var fs = require("fs");
var res = fs.appendFileSync("nodejs/write.txt","world");
if(!res){
    console.log("追加成功")
}