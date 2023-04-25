const path = require('path');

console.log(path.sep);

//* To join the path of any file and display it
const testPath = path.join('9-path', 'subfolder', 'test.txt');
console.log(testPath);

//* To acces the filename (base file) using 'path' module (We can obviously use the __filename method or __dirname method for these things)
const baseFile = path.basename(testPath);
console.log(baseFile);

//* To find the exact or absolute path of the file in the computer
const absolutePath = path.resolve(__dirname, '9-path', 'subfolder', 'test.txt');
console.log(absolutePath);
