#!/usr/bin/node
const fs=require('fs'),
      dst=process.argv[4];

try{
    console.log(fs.statSync(dst));

} catch(err) {
    console.error(err.message);
      process.exit(1);
}
