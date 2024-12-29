/**
 * Demonstrating the behavior of `this` in various JavaScript contexts.
 * Covers global scope, function invocation, arrow functions, object methods,
 * returned functions, and class methods with explicit and implicit bindings.
 */

'use strict';

// Section Separator
function logSection(title: string) {
  console.log('-'.repeat(50));
  console.log(`  ${title}`);
  console.log('-'.repeat(50));
}

// Demonstrating `this` in the global scope with strict mode
logSection('Global Context');
console.log('Global `this` with strict mode:', this);

// External context object for testing explicit bindings
const externalContext = { content: 'some content' };
let idx = 456;

// Function declaration and invocation examples
logSection('Function Declarations and Explicit Bindings');
function run(note: string) {
  console.log(`${note} - Current value of "this":`, this);
}
console.log('General invocation:');
run('General function invocation');
console.log('Constructor invocation using `new`:');
new run('Constructor invocation');
console.log('Explicit bindings:');
run.call(externalContext, 'Using `call`');
run.apply(externalContext, ['Using `apply`']);
run.bind(externalContext)('Using `bind`');

// Arrow function inside an object
logSection('Arrow Functions in Objects');
const obj = {
  id: 123,
  run: (note: string) => console.log(`${note} - Lexical "this":`, this),
};
console.log('Arrow function invocation:');
obj.run('As object method');
obj.run.bind(externalContext)('With `bind`');
obj.run.call(externalContext, 'With `call`');
obj.run.apply(externalContext, ['With `apply`']);

// Functions returned by methods in an object
logSection('Returned Functions in Objects');
const obj2 = {
  id: 123,
  getRunReturnsArrow: function (note: string) {
    console.log('>Inside `getRunReturnsArrow` - `this`:', this);
    return () => console.log(`${note} - Lexical "this":`, this);
  },
  getRunReturnsFunc: function (note: string) {
    console.log('>Inside `getRunReturnsFunc` - `this`:', this);
    return function () {
      console.log(`${note} - Dynamic "this":`, this);
    };
  },
};
console.log('Arrow function returned by method:');
obj2.id = 456;
obj2.getRunReturnsArrow('Returned arrow function')();
obj2.getRunReturnsArrow('With `bind`').bind(externalContext)();
obj2.getRunReturnsArrow('With `call`').call(externalContext);
obj2.getRunReturnsArrow('With `apply`').apply(externalContext);

console.log('Regular function returned by method:');
obj2.getRunReturnsFunc('Returned regular function')();
obj2.getRunReturnsFunc('With `bind`').bind(externalContext)();
obj2.getRunReturnsFunc('With `call`').call(externalContext);
obj2.getRunReturnsFunc('With `apply`').apply(externalContext);

// Direct method and arrow function member in a class
logSection('Methods in Classes');
export class Processor {
  id: number = 333;
  runMethodFunc(note: string) {
    console.log(`${note} - Dynamic "this":`, this);
  }
  runMethodArrow = (note: string) =>
    console.log(`${note} - Lexical "this":`, this);
}
const p = new Processor();
console.log('Regular method:');
p.runMethodFunc('Direct invocation');
p.runMethodFunc.bind(externalContext)('With `bind`');
p.runMethodFunc.call(externalContext, 'With `call`');
p.runMethodFunc.apply(externalContext, ['With `apply`']);
console.log('Arrow function member:');
p.runMethodArrow('Direct invocation');
p.runMethodArrow.bind(externalContext)('With `bind`');
p.runMethodArrow.call(externalContext, 'With `call`');
p.runMethodArrow.apply(externalContext, ['With `apply`']);
