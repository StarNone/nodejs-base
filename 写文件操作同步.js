var fs = require("fs");
var res = fs.writeFileSync("nodejs/write.txt","h123")
if(!res){
    console.log("写入成功")
}