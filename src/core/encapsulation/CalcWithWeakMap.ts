/**
 * Encapsulation Example: WeakMap for Private State
 *
 * This module demonstrates encapsulation using a `WeakMap` to manage private state.
 * The `WeakMap` stores private data externally, associating it with the class instance.
 * This provides true runtime privacy while ensuring unused data is garbage collected.
 *
 * Use Case:
 * - Suitable for advanced scenarios requiring runtime privacy and memory optimization.
 * - Works well in JavaScript/TypeScript environments supporting ES6 (ECMAScript 2015) or later.
 */

import { BaseCal } from './BaseCal';

const privateState = new WeakMap();

export class CalcWithWeakMap extends BaseCal {
  constructor(start: number, tag: string) {
    if (start < 0) {
      start = 0;
    }
    super(start, tag);
    privateState.set(this, { start });
  }

  private print(msg: string) {
    console.log(`${this.tag} ${msg}`);
  }

  add(amount: number): number {
    if (amount <= 0) {
      return this.total;
    }

    this.total += amount;
    this.print(this.total.toString());
    return this.total;
  }

  getStart() {
    const start = privateState.get(this)?.start ?? 0;
    this.print(`start ${start}`);
    return start;
  }
}
