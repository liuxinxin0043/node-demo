#!/usr/bin/node
console.log('hello world');

const GreenStream=require('./04-green-stream'),
      stdin =process.stdin;

var g = new GreenStream();

stdin.resume();
stdin.pipe(g);
