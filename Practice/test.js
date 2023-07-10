//Global object

global.setTimeout(() => {
  console.log('timeout');
  clearInterval(interval);
}, 3000);

global.setInterval(() => {
  console.log('interval');
}, 1000);

//Useful stuff
console.log(__dirname);
console.log(__filename);

const os = require('os');
console.log(os.platform(), os.homedir());
