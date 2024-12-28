/**
 * Encapsulation Example: JavaScript Private Fields (`#`)
 *
 * This module demonstrates encapsulation using JavaScript's `#` private fields,
 * which provide true runtime privacy. These fields are fully hidden and cannot
 * be accessed outside the class definition.
 *
 * Use Case:
 * - Suitable for modern JavaScript/TypeScript codebases targeting ES2022 or newer.
 * - Ensures strict runtime privacy for sensitive data.
 */

import { BaseCal } from './BaseCal';

export class CalcWithJSPrivateFields extends BaseCal {
  #start: number;

  constructor(start: number, tag: string) {
    if (start < 0) {
      start = 0;
    }
    super(start, tag);
    this.#start = start;
  }

  #print(msg: string) {
    console.log(`${this.tag} ${msg}`);
  }

  add(amount: number): number {
    if (amount <= 0) {
      return this.total;
    }

    this.total += amount;
    this.#print(this.total.toString());
    return this.total;
  }

  getStart() {
    this.#print(`start ${this.#start}`);
    return this.#start;
  }
}
