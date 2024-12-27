/**
 * Factory Pattern: Calculator
 *
 * This module demonstrates the Factory pattern in TypeScript.
 * The `calcFactory` function creates independent calculator instances,
 * each with its own state and private members.
 *
 * Key Features:
 * - Allows customization via `from` (initial value) and `tag` (logging prefix).
 * - Encapsulates private state (`_total`) and methods (`_validate`, `_print`).
 * - Returns a public API with an `add` method to interact with the calculator.
 *
 * Use Case:
 * - Ideal for scenarios requiring multiple calculators with independent states.
 */

export interface Calc {
  add(amount: number): number;
}

export function calcFactory(from: number = 0, tag: string = '@@'): Calc {
  // Private members
  let _total = from;
  function _print(msg: string): void {
    console.log(`${tag} ${msg}`);
  }

  function _validate(value: number): boolean {
    return value >= 0;
  }

  // Public API
  return {
    add(amount: number): number {
      if (_validate(amount)) {
        _total += amount;
      } else {
        _print(`Invalid amount: ${amount}`);
      }

      _print(_total.toString());
      return _total;
    },
  };
}
