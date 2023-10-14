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

// Create a class for Managers
class Manager extends Employee {
  constructor(details: EmployeeDetails) {
    super(details);
  }

  manageTeam() {
    return `${this.name} is managing the ${this.department} team.`;
  }
}

// Generic factory function for creating employees
function createEmployee<T extends Employee>(
  c: new (details: EmployeeDetails) => T,
  details: EmployeeDetails
): T {
  return new c(details);
}

// Use the generic factory to create a manager
const managerDetails: EmployeeDetails = {
  name: 'Jane Doe',
  role: 'Manager',
  department: 'Studio',
};

// Use the generic factory to create a designer
const designerrDetails: EmployeeDetails = {
  name: 'John Doe',
  role: 'Designer',
  department: 'Studio',
};

const manager = createEmployee(Manager, managerDetails);
const designer = createEmployee(Employee, designerrDetails);

// Output: John Doe is managing the Studio team.
console.log(manager.manageTeam());
// Output: Name: John Doe, Role: Designer, Department: Studio
console.log(designer.getDetails());
