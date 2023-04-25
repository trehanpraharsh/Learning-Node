//*GLOBALS - No Window!

//* __dirname - path to current directory
//* __filename - file name
//* require - function to use modules (CommonJS)
//* module - info about current module (file)
//* process - info about environment(env) where the module is being executed

console.log(__dirname);
console.log(__filename);
console.log(process);

setInterval(() => {
  console.log(`Hello World!`);
}, 1000);
