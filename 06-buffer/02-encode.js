#!/usr/bin/node
//const log= console.log,
  //    usr=process.argv[2],
    //  pwd=process.argv[3];
//log('usr:%d,pwd:%s',usr,pwd);

//var buf =new Buffer(usr+':'+pwd);
//log('base64:%s',buf.toString('base64'));
//
const log = console.log,
      usr = process.argv[2],
      pwd = process.argv[3];

if(process.argv.length !== 4) {
  =  console.error('命令行格式：cmd username password');
    process.exit(1);

}

log('user name: %s\npassword: %s', usr, pwd);

const buf = new Buffer(usr + ':' + pwd);

log('Base64:', buf.toString('Base64'));

