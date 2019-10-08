#!/usr/bin/node


const addd='http://www.sian.com/',
      http=require('http);


var isOK=false;
do{
  
 http.get(addr,function(res){
   //print response 
   console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.ststusMessage}`)
   //print response header
   console.log(res.headers);
   console.log('');
   //print response body
   res.pipe(process.stdout);

 });
 isOK=true;
}while(!isOK);

 function get(addr,function(res){
   
   //print response 
   console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.ststusMessage}`)
   //print response header
   console.log(res.headers);
   console.log('');
   //print response body
   res.pipe(process.stdout);

   if(res.)
 })

get(addr);
