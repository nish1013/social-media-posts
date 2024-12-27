import calculatorSingleton from './calculator-singleton';
import { calcFactory } from './calc-factory';

// Singleton Example
console.log('Singleton Pattern Example:');
calculatorSingleton.add(0);
calculatorSingleton.add(10);
calculatorSingleton.add(20);
calculatorSingleton.add(-1); // Invalid
calculatorSingleton.add(40);

// Factory Example
console.log('\nFactory Pattern Example:');
const calClassic = calcFactory(0, 'Classic');
const cal10 = calcFactory(10, 'FROM 10 ->');

calClassic.add(1); // Classic 1
cal10.add(1); // FROM 10 -> 11
calClassic.add(2); // Classic 3
cal10.add(2); // FROM 10 -> 13
