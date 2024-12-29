/**
 * Demonstration: JavaScript Scoping, Closures, and `this` Context
 *
 * This example explores several core JavaScript concepts:
 *
 * 1. **Lexical Scoping and Closures**:
 *    - Inner functions retain access to variables from their enclosing functions.
 *    - This includes both parameters and locally declared variables.
 *
 * 2. **Dynamic `this` Context**:
 *    - The value of `this` depends on how a function is invoked:
 *    - General invocation (`this` is `undefined` in strict mode).
 *    - Context-bound invocation using `.call()`.
 *
 * 3. **Behavior of `arguments`**:
 *    - `arguments` is a special object containing the arguments passed to a function.
 *    - Each function has its own `arguments` object.
 *
 * 4. **Global Variables**:
 *    - Global variables are accessible in all scopes but can be overwritten, showing their mutable nature.
 *
 * 5. **Arrow Functions**:
 *    - Arrow functions do not have their own this context or arguments object.
 *    - Instead, they inherit this and arguments from their enclosing lexical scope.
 *    - This behavior makes arrow functions different from regular functions, which have their own this and arguments.
 *
 * Use Cases:
 * - Understanding closures and variable access in JavaScript.
 * - Exploring how `this` behaves in different invocation contexts.
 * - Learning the behavior of `arguments` and arrow functions.
 */

console.log('### Global Execution ###');

let gVar = 'Gvar'; // Global variable (module scope)

export default function outer(outerParam: string): (param: string) => () => void {
  console.log('outer `this` context:', this);
  console.log('outer `arguments` object:', arguments);

  let outerVar = 'OuterVar'; // Local variable in outer function

  return function inner(innerParam: string): () => void {
    // Reassign outerVar to demonstrate closures
    outerVar = 'OuterVar reassigned within inner';

    console.log('inner `this` context:', this);
    console.log('inner `arguments` object:', arguments);

    // Access variables from different scopes
    console.log(
      'Inner function -> Accessing variables:\n' +
        `  gVar="${gVar}",\n` +
        `  outerParam="${outerParam}",\n` +
        `  innerParam="${innerParam}",\n` +
        `  outerVar="${outerVar}"`
    );

    return () => {
      const innerArrowVar = 'InnerArrowVar'; // Local variable in returned arrow function
      console.log('inner `this` context in returned arrow function:', this);
      console.log(
        'inner `arguments` object in returned arrow function:',
        arguments
      );

      console.log(
        'Arrow function -> Accessing variables:\n' +
          `  gVar="${gVar}",\n` +
          `  outerParam="${outerParam}",\n` +
          `  innerParam="${innerParam}",\n` +
          `  outerVar="${outerVar}",\n` +
          `  innerArrowVar="${innerArrowVar}"`
      );
    };
  };
}

console.log('\n## General Invocation ##');

gVar = 'Gvar reassigned'; // Reassign global variable
const inner = outer('Outer Param'); // Invoke outer function
const innerArrow = inner('Inner Param'); // Invoke inner function
innerArrow(); // Invoke returned arrow function

console.log('\n## Context Invocation ##');

// Create objects to demonstrate dynamic `this` context
const outerContext = {
  content: 'Outer Context',
};

const innerContext = {
  content: 'Inner Context',
};

gVar = 'Gvar reassigned again'; // Reassign global variable again
const inner2 = outer.call(outerContext, 'Outer Param'); // Call outer with a specific `this` context
const innerArrow2 = inner.call(innerContext, 'Inner Param'); // Call inner with a specific `this` context
innerArrow2(); // Invoke returned arrow function
