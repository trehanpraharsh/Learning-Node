//* CommonJS, Every file is a module (by default)
//* Modules - Encapsulated Code (only share minimum)

const { john, peter } = require('./3-addFiles1');
const sayHi = require('./3-addFiles2');

require('./3-mindGrenade'); //* It still calls executes the code, without even assigning any variable to it. And just requiring it executed the code above. Also if i would have not called the function in the mindGrenade module, it would'nt have executed itself.

sayHi('Praharsh');
sayHi(john);
sayHi(peter);
