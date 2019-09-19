#!/usr/bin/node
console.log('hello world');

const Read=require('stream').Readable;

function MyReadable(){
  Read.call(this);         
}
 var c= 'a'.charCodeAt(0);
 MyReadable.prototype_read=(){
    this.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0))this.push(null);
  }
MyReadable.prototype=Read.
