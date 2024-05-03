// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้

userTaskList.push({ id: 5, task: "Walk the dog" });

const taskToEdit = userTaskList.find(task => task.id === 4);
if (taskToEdit) {
  taskToEdit.task = "Go to the gym";
}

userTaskList.pop();

const lastIndex = userTaskList.length - 1
const lastTask = userTaskList[lastIndex];

console.log(`Task id: ${lastTask.id}, ${lastTask.task}`);
