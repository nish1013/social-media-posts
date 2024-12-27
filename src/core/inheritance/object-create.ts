/**
 * Example: Prototypal Inheritance Using `Object.create()`
 *
 * This example demonstrates how to implement inheritance in JavaScript
 * using the `Object.create()` method, which directly sets up the prototype
 * chain between objects without involving constructors or classes.
 *
 * Key Concepts:
 * - Objects inherit properties and methods from other objects via the prototype chain.
 * - `Object.create()` creates a new object with the specified prototype.
 *
 * Advantages:
 * - Simple and efficient for setting up prototype chains.
 * - No unnecessary properties or boilerplate code from constructors.
 *
 * Use Case:
 * Best suited for scenarios where initialization logic (via constructors) is not required.
 */

interface IGParent {
  name: string;
  hello(): void;
}

const gParentt: IGParent = {
  name: 'gp',
  hello() {
    console.log(this.name);
  },
};

const parentt = Object.create(gParentt);
parentt.name = 'p';

const childd1 = Object.create(parentt);
childd1.name = 'childd1';
childd1.hello();

const childd2 = Object.create(parentt);
childd2.name = 'childd2';
childd2.hello();

console.log('childd1.prototype', Object.getPrototypeOf(childd1));
console.log('childd2.prototype', Object.getPrototypeOf(childd2));

console.log('parentt.prototype', Object.getPrototypeOf(parentt));
console.log('gParentt.prototype', Object.getPrototypeOf(gParentt));