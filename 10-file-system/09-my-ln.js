#!/usr/bin/node
const fs= require('fs');

switch(process.argv.length){
  case 4://hard link
    var src=process.argv[2],
        lnk=process.argv[3];
    //fs.linkSync(src,lnk);
    if(fs.existsSync(src)){
            fs.linkSync(src, lnk);
                
    } else {
            console.error('%s not exist!', src);
            process.exit(1);
                      
    }
    break;

  case 5://soft link
    var opt=process.argv[2],
        src=process.argv[3],
        lnk=process.argv[4];
    if(opt === '-s') {
      if(fs.existsSync(src)){
                fs.symlinkSync(src, lnk);
                      
      } else {
                console.error('%s not exist!', src);
                        process.exit(1);
                              
      }
          
    } else {
            console.error('命令行参数不正确！');
                
    }
  
   // if(opy!=='s')errMsg();
   // fs.symlinkSync(src,lnk);
    break;

  default://error
      console.log('命令行参数不正确！');

}
