const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});