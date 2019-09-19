#!/usr/bin/node
  const http = require('http'),
        fs   = require('fs');

  http.createServer((req,res)=>{
  
    var fileName=__dirname+req.url;
    console.log(fileName);
   // fs.readFile(fileName,function(data){})
    res.end(fs.readFileSync(fileName).toString('utf8'));
  }).listen(8080);
