#!/usr/bin/node


var circle={
  'area':function(radius){
    return Math.PI*radius*radius;
  },
  'circumference':function(radius){
    return 2*radius*Math.PI;
  }
  'diamter':function(radius){
    return 2*radius;
  }
};

console.dir(module);
module.exports=circle;
