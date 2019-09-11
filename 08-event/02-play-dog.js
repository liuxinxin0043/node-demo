#!/usr/bin/node

const Dog=require('./02-dog');

var taidi=new Dog('taidi',4);
var zangao=new Dog('zangao',9);

/*taidi.on('bark',function(){
  console.log('%s barked!energy:',this.getName,this.getEnergy);
});*/
taidi.on('bark',onbark);
zangao.on('bark',onbark);
function onbark(){
  console.log('%s barked! energy: %s',this.getName(),this.getEnergy());
}
