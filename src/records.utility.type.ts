type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

// Define a record where the keys are task IDs (strings) and
// values are TaskStatus
type TaskStatusMap = Record<string, TaskStatus>;

// Example task statuses
const taskStatuses: TaskStatusMap = {
  'task1': 'TODO',
  'task2': 'IN_PROGRESS',
  'task3': 'DONE',
};

// Function to update a task's status
function updateTaskStatus(taskId: string, newStatus: TaskStatus): void {
  // Check if the task ID exists in the map
  if (taskId in taskStatuses) {
    taskStatuses[taskId] = newStatus;
    console.log(`Task "${taskId}" status updated to "${newStatus}"`);
  } else {
    console.log(`Task "${taskId}" not found.`);
  }
}

// Example usage
// Task "task2" status updated to "DONE"
updateTaskStatus('task2', 'DONE');
 // Task "task4" not found.
updateTaskStatus('task4', 'TODO');
