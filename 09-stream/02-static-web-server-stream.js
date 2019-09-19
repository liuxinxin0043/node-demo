#!/usr/bin/node
  const http = require('http'),
        fs   = require('fs');

  http.createServer((req,res)=>{
  
    var fileName=__dirname+req.url;
    console.log(fileName);
    // fs.readFile(fileName,function(data){})
    fs.createReadStream(fileName).pipe(res);
  }).listen(8080);
