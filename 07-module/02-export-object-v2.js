#!/usr/bin/node



  function(radius){
    return Math.PI*radius*radius;
  }

  function(radius){
    return 2*radius*Math.PI;
  }

  function(radius){
    return 2*radius;
  }



module.exports.area=area;
module.exports.diameter=diameter;
