// Array of student objects
const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 55 },
  { name: 'Charlie', age: 23, grade: 75 },
  { name: 'David', age: 21, grade: 45 }
];

const stydentByGrade = students => students.filter(st => st.grade < 60);

console.log(stydentByGrade(students));