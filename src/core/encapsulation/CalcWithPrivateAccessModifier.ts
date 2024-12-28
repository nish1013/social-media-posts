/**
 * Encapsulation Example: TypeScript Private Modifier
 *
 * This module demonstrates encapsulation using TypeScript's `private` access modifier.
 * While the `private` modifier ensures compile-time safety, it does not provide true
 * runtime privacy as private members can still be accessed using JavaScript hacks.
 *
 * Use Case:
 * - Suitable for TypeScript-only codebases where runtime privacy is not critical.
 * - Offers simplicity and developer-friendly compile-time safety.
 */

import { BaseCal } from './BaseCal';

export class CalcWithPrivateAccessModifier extends BaseCal {
  private start: number;

  constructor(start: number, tag: string) {
    if (start < 0) {
      start = 0;
    }
    super(start, tag);
    this.start = start;
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
    this.print(`start ${this.start}`);
    return this.start;
  }
}
