/**
 * TypeScript Example: Enhancing Data Privacy with Omit
 *
 * Showcases using TypeScript's Omit utility to enhance data privacy by
 * excluding sensitive information from objects in logging operations.
 * Prevents exposure of private data in backend application logs.
 */

export interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string; // Sensitive info
  nationalInsuranceNumber: string; // Sensitive info
}

// Define type excluding sensitive properties for logging
type EmployeeForLogging = Omit<Employee, 'nationalInsuranceNumber' | 'phone'>;

function logEmployee(employee: EmployeeForLogging) {
  console.log(
    `Data: ID: ${employee.id}, Name: ${employee.name}, Email: ${employee.email}`
  );
}

// Create an Employee object
const employee: Employee = {
  id: 1,
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '01134960000', // Excluded from logs
  nationalInsuranceNumber: '123-45-6789', // Excluded from logs
};

// Prepare employee data for logging by omitting sensitive info
const employeeForLogging: EmployeeForLogging = {
  id: employee.id,
  name: employee.name,
  email: employee.email,
  // phone and nationalInsuranceNumber omitted
};

logEmployee(employeeForLogging); // Safely logs data without sensitive info
