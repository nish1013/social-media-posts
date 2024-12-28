/**
 * Abstract Base Calculator Class
 *
 * This class defines the shared structure for all calculator implementations.
 * It enforces a contract for the `add` method and provides reusable properties.
 */

export abstract class BaseCal {
  protected tag: string;
  protected total: number;

  constructor(total: number, tag: string) {
    this.total = total;
    this.tag = tag;
  }

  abstract add(amount: number): number;
}
