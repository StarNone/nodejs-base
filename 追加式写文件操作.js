var fs = require("fs");
fs.appendFile("nodejs/write.txt","hello",(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("添加完成")
    }
})