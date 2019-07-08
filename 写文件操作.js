var fs = require("fs");
fs.writeFile("nodejs/write.txt","123456",function(err){
    if(err){
        console.log(err)
    } else {
        console.log("写入成功！")
    }
})