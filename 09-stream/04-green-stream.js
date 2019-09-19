#!/usr/bin/node
console.log('hello world');

const write = require('stream').Writable;

function GreenStream(){
  write.call(this);
}

GreenStream.prototype=write.prototype;

GreenStream.prototype._write=function(chunk,encoding,callback){
  process.stdout.write(console.log('\033[1;32m' + 'hello world!' + '\033[1;37m'));
  callback();
};
