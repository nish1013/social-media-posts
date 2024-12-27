/**
 * Singleton Pattern: Calculator
 *
 * This module demonstrates the Singleton pattern in TypeScript.
 * The `calculatorSingleton` maintains a single instance with shared state
 * across the entire application. It encapsulates private members and exposes
 * a public API for adding validated numbers.
 *
 * Key Features:
 * - Encapsulates private variables (`_total`) and methods (`_validate`, `_print`).
 * - Exposes a public `add` method for adding values to the total.
 * - Ensures only one instance is shared globally.
 *
 * Use Case:
 * - Ideal for managing a single global state, such as an application-wide counter.
 */

const calculatorSingleton = (function () {
  // Private members
  let _total = 0;
  function _print(msg: string): void {
    console.log(`## ${msg}`);
  }

  function _validate(value: number): boolean {
    return value >= 0;
  }

  // Public API
  function add(amount: number): number {
    if (_validate(amount)) {
      _total += amount;
    } else {
      _print(`Invalid amount: ${amount}`);
    }

    _print(_total.toString());
    return _total;
  }

  return Object.freeze({
    add,
  });
})();

export default calculatorSingleton;
