#!/usr/bin/node

const fs= require('fs'),
      lnk=process.argv[2];

if(typeof(src) === 'undefined' || process.argv.length !== 3) {
    console.error('命令行参数不正确!');
      process.exit(1);

}
try{
   // console.log(src, '->', fs.readlinkSync(src));
    console.log('%s -> %s',lnk,fs,readlinkSync(lnk));

} catch(err) {
    console.error(err.message);
      process.exit(2);

}
