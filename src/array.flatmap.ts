// Define the structure of a Student object
interface Student {
    id: number;
    name: string;
    courses: string[];
  }
  
  // Array of Student objects with id, name, and courses
  const students: Student[] = [
    {
      id: 1,
      name: "Alice",
      courses: ["Math", "History"],
    },
    {
      id: 2,
      name: "Bob",
      courses: ["Physics", "Computer Science"],
    },
    {
      id: 3,
      name: "Carol",
      courses: ["Biology"],
    },
  ];
  
  // Use flatMap to extract and flatten the courses from all students
  const allCourses: string[] = students.flatMap((student) => student.courses);
  
  // Print the flattened array of all courses
  console.log(allCourses); // Output: ["Math", "History", "Physics", "Computer Science", "Biology"]