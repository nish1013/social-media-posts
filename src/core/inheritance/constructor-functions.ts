/**
 * Example: Constructor Functions with Dynamic Prototype Chains
 *
 * This example demonstrates how to implement inheritance in JavaScript
 * using constructor functions and `Object.setPrototypeOf()` to dynamically
 * establish prototype chains between objects.
 *
 * Key Concepts:
 * - Constructor functions act as factories to initialize objects.
 * - Prototypes are explicitly linked using `Object.setPrototypeOf()`.
 * - Each object created by a constructor has access to methods on the prototype chain.
 *
 * Advantages:
 * - Allows initialization logic in constructors.
 * - Compatible with older JavaScript environments (pre-ES6).
 *
 * Disadvantages:
 * - Dynamic prototype modification with `Object.setPrototypeOf()` can impact performance.
 *
 * Use Case:
 * Suitable for applications requiring initialization logic but not yet using ES6 classes.
 */

export function GParentt(this: any) {
  this.tag = 'g';
}

GParentt.prototype.hello = function () {
  console.log(this.tag);
};

export function Parentt(this: any) {
  this.tag = 'p';
}

Object.setPrototypeOf(Parentt.prototype, GParentt.prototype);

export function Childd(this: any, tag: string) {
  this.tag = tag;
}

Object.setPrototypeOf(Childd.prototype, Parentt.prototype);

const chdd1 = new Childd('chdd1');
chdd1.hello();

const chdd2 = new Childd('chdd2');
chdd2.hello();

console.log('chdd1.prototype', Object.getPrototypeOf(chdd1));
console.log('chdd2.prototype', Object.getPrototypeOf(chdd2));
console.log('Childd constructor', Childd.prototype.constructor);

console.log('parentt.prototype', Object.getPrototypeOf(Parentt.prototype));
console.log('gParentt.prototype', Object.getPrototypeOf(GParentt.prototype));
