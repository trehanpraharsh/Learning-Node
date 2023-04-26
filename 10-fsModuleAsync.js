const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./10-fs/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./10-fs/subfolder/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './10-fs/subfolder/resultAsync.txt',
      `This is the result produced by async write method and the contents of the first and second file are ${first} and ${second}`,
      (err, result) => {
        console.log('done with this task');
      }
    );
  });
});
console.log('onto the next one');
