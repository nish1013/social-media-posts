/**
 * Transitioning to Generics in TypeScript: Simplifying Your Codebase
 *
 * This file demonstrates the transition from traditional item-oriented
 * programming (OOP) to using generics in TypeScript, based on an example from
 * the TypeScript documentation. Generics offer flexibility, reusability, and
 * type safety that can simplify your codebase.
 *
 * By working backward from a TypeScript generics example to a traditional OOP
 * approach, this example highlights the benefits generics can bring to your
 * code.
 *
 * Reference: https://www.typescriptlang.org/play/?q=199#example/generic-classes
 */

// Define data interfaces
export interface DrawerItem {
  label: string;
}

export interface Shirt extends DrawerItem {
  size: 'S' | 'M' | 'L' | 'XL';
}

export interface Sock extends DrawerItem {
  pattern: 'Striped' | 'Solid' | 'Polka Dot';
}

// Traditional OOP Approach

// Define an interface for drawer base operations
export interface DrawerBase {
  add(item: DrawerItem): void;
  remove(): void;
}

// Implement a class for managing Shirt items
export class DrawerShirts implements DrawerBase {
  contents: Shirt[] = [];

  add(item: Shirt) {
    this.contents.push(item);
  }

  remove() {
    return this.contents.pop();
  }
}

// Implement a class for managing Sock items
export class DrawerSocks implements DrawerBase {
  contents: Sock[] = [];

  add(item: Sock) {
    this.contents.push(item);
  }

  remove() {
    return this.contents.pop();
  }
}

// Generic Approach

// Implement a generic class for managing any type of drawer items
export class Drawer<ClothingType> {
  contents: ClothingType[] = [];

  add(item: ClothingType) {
    this.contents.push(item);
  }

  remove() {
    return this.contents.pop();
  }
}

// Usage examples
const shirtDrawer = new Drawer<Shirt>();
const sockDrawer = new Drawer<Sock>();

const myShirt: Shirt = {
  label: 'Red Shirt',
  size: 'M'
};

const mySock: Sock = {
  label: 'Blue Sock',
  pattern: 'Striped'
};

shirtDrawer.add(myShirt);
sockDrawer.add(mySock);
