import { CalcWithPrivateAccessModifier } from './CalcWithPrivateAccessModifier';
import { CalcWithJSPrivateFields } from './CalcWithJSPrivateFields';
import { CalcWithWeakMap } from './CalcWithWeakMap';

console.log('=== CalcWithPrivateAccessModifier ===');
const calc1 = new CalcWithPrivateAccessModifier(10, 'Private ->');
calc1.add(3);
calc1.getStart();

console.log('\n=== CalcWithJSPrivateFields ===');
const calc2 = new CalcWithJSPrivateFields(10, 'Hash ->');
calc2.add(3);
calc2.getStart();

console.log('\n=== CalcWithWeakMap ===');
const calc3 = new CalcWithWeakMap(10, 'WeakMap ->');
calc3.add(3);
calc3.getStart();
