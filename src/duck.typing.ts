// Define a Person interface with properties name and age
interface Person {
  name: string;
  age: number;
}

// Define an Employee interface with properties name, age, and employeeId
interface Employee {
  name: string;
  age: number;
  employeeId: string;
}

// Function to print person information
function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Function to print employee information
function printEmployeeInfo(employee: Employee): void {
  console.log(
    `Name: ${employee.name}, Age: ${employee.age}, Employee ID: ${employee.employeeId}`
  );
}

// Create a Person object
const personData: Person = { name: "Alice", age: 30 };

// Create an Employee object
const employeeData: Employee = { name: "Bob", age: 25, employeeId: "12345" };

// Use the printPersonInfo function with employeeData
printPersonInfo(employeeData); // Output: Name: Bob, Age: 25

// Use the printPersonInfo function with personData
printPersonInfo(employeeData); // Output: Name: Alice, Age: 30

// Use the printEmployeeInfo function with personData
// This won't work, why ? think :)
// printEmployeeInfo(personData); // Error!
