/*console.log("server file is running")
function add(a,b){
  return a+b;
}

var result = add(2,5);
console.log(result);
*/
/*
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('greeting.txt', 'Hi' + user.username + '!\n', ()=>{
  console.log('file is created');
})
*/

const note = require('./note.js');
console.log("server is loaded");
var age = note.age;
console.log(age);