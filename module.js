//-------- CORE MODULES fs--------------

// const fs=require('fs');
// fs.writeFile('sample.txt','i am ok are you ready','utf8',(err)=>{
// if(err){
//     throw err;
// }
// console.log("File written succesfully");
// })


// const fs=require('fs');
// fs.readFile('sample.txt','utf-8',(err,data)=>{
// if(err){
//     throw err
// } 
// console.log(data);
// })


//   const fs=require('fs');
//   fs.appendFile('sample.txt','\n I am a Software engineer','utf-8',(err)=>{
// if(err){
//     throw err
//     console.log('data appended successfully');
// }
//   });


// const fs=require('fs');
// fs.rename('sample.txt','idea.txt',(err)=>{
// if(err){
//     throw err;
//     console.log("successfully updated the name");
// }
// })


// const fs=require('fs');
// fs.unlink('myfile.txt',(err)=>{
// if(err){
//     throw err;
//     console.log("File deleted successfully");
// }
// })


// const fs=require('fs');
// if(fs.existsSync('idea.txt')){
//     console.log("file exist");
// }
// else{
//     console.log('not exist');
// }


// const fs=require('fs');
// fs.mkdir('myfolder',(err)=>{
// if(err){
//     throw err
//     console.log("Success fully created a folder");
// }
// })

// const fs=require('fs');
// fs.readdir('myfolder',(err,data)=>{
// if(err){
//     throw err
// }
// console.log(data);
// })


// const fs = require('fs');

// fs.watch('idea.txt', (eventType, filename) => {
//     console.log(`${filename} has been changed!`);
//   });
  

  const fs = require('fs'); 
  fs.stat('idea.txt',(err,stats)=>{
if(err) throw err;
console.log(stats);
  })