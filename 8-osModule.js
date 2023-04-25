const os = require('os');

//* Info about the current User
const user = os.userInfo();
console.log(user);

//* Method returns the system's uptime (running time) in seconds
console.log(`The System's Uptime is ${os.uptime()} seconds`);

//* Designing our own object on the basis of OS Module properties
const currentOS = {
  name: os.type(),
  releaseAt: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
