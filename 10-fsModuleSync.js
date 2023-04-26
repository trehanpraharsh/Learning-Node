// const fs = require('fs');
// fs.readFileSync;

const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./10-fs/first.txt', 'utf-8');
const second = readFileSync('./10-fs/subfolder/second.txt', 'utf-8');

writeFileSync(
  './10-fs/result.txt',
  `This is the result file created using 'writeFileSync' and it also has the content of the first : ${first} and the second : ${second} file`
);
console.log('done with the execution');
console.log('onto the next one');
