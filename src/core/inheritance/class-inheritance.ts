/**
 * Example: Class-Based Inheritance (ES6+)
 *
 * This example demonstrates modern inheritance in JavaScript using ES6 classes.
 * The `class` syntax provides a clear and concise way to implement prototypal inheritance
 * while adding familiar OOP (object-oriented programming) semantics.
 *
 * Key Concepts:
 * - `class` defines a blueprint for objects.
 * - `extends` sets up the prototype chain for inheritance.
 * - `super` is used to call the constructor or methods of a parent class.
 *
 * Advantages:
 * - Readable and familiar syntax for developers with OOP backgrounds.
 * - Encapsulation of initialization logic within constructors.
 * - Fully compatible with JavaScript's prototypal inheritance under the hood.
 *
 * Use Case:
 * Ideal for modern JavaScript applications, especially when working with ES6+.
 */

export class GParent {
  tag: string;

  constructor() {
    this.tag = 'GP';
  }

  hello(): void {
    console.log(this.tag);
  }
}

export class Parent extends GParent {
  constructor() {
    super();
    this.tag = 'P';
  }
}

export class Child extends Parent {
  constructor(tag: string) {
    super();
    this.tag = tag;
  }
}

const c1 = new Child('c1');
c1.hello();

const c2 = new Child('c2');
c2.hello();

console.log('c1.prototype', Object.getPrototypeOf(c1));
console.log('c2.prototype', Object.getPrototypeOf(c2));
console.log('Child constructor', Child.prototype.constructor);

console.log('Parent.prototype', Object.getPrototypeOf(Parent.prototype));
console.log('GParent.prototype', Object.getPrototypeOf(GParent.prototype));
