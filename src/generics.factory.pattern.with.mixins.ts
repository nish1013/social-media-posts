type Role = 'Designer' | 'Engineer' | 'Manager';
type Department = 'Games' | 'Platform' | 'Studio';

// Define an interface for employee details
interface EmployeeDetails {
  name: string;
  role: Role;
  department: Department;
}

// Create a base class for employees
class Employee {
  protected readonly name: string;
  protected readonly role: Role;
  protected readonly department: Department;

  constructor(details: EmployeeDetails) {
    this.name = details.name;
    this.role = details.role;
    this.department = details.department;
  }

  getDetails() {
    return `Name: ${this.name}, Role: ${this.role}, Department: ${this.department}`;
  }
}

// Define a constructor type for classes with mixins
// with a constraint that T extends the Employee type.
// Note: A mixin class must have a constructor with a single rest parameter of type 'any[]'.
type Constructor<T extends Employee = Employee> = new (...args: any) => T;

// Define a mixin for adding report generation behavior
function WithReportAccess<T extends Constructor>(Base: T) {
  return class extends Base {
    // Method to generate a report
    generateReport() {
      return `Generating a report...`;
    }
  };
}

// Define another mixin for adding meeting scheduling behavior
function WithMeetingScheduling<T extends Constructor>(Base: T) {
  return class extends Base {
    // Method to schedule a meeting
    scheduleMeeting() {
      return `Scheduling a meeting....`;
    }
  };
}

// Use the manager with both mixins
const managerDetails: EmployeeDetails = {
  name: 'Jane Doe',
  role: 'Manager',
  department: 'Studio',
};

// Apply mixins to create a Manager class with additional behaviors
const Manager = WithMeetingScheduling(WithReportAccess(Employee));

// Instantiate a manager with the added behaviors
const manager = new Manager(managerDetails);

// Output the manager's details and perform additional actions
console.log(manager.getDetails());
console.log(manager.scheduleMeeting());
console.log(manager.generateReport());
