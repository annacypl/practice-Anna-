const students = [
  { name: 'Anna', grade: 5 },
  { name: 'Ivan', grade: 4 },
  { name: 'Anna', grade: 5 }, 
  { name: 'Petr', grade: 3 },
  { name: 'Olga', grade: 4 },
  { name: 'Ivan', grade: 4 }  
];


const stringsArray = students.map(student => JSON.stringify(student));

const uniqueStringsSet = new Set(stringsArray);


const uniqueStudents = [...uniqueStringsSet].map(str => JSON.parse(str));

console.log("Уникальные студенты:", uniqueStudents);

const gradeMap = new Map();

students.forEach(student => {
  
  if (!gradeMap.has(student.grade)) {
    gradeMap.set(student.grade, []);
  }
 
  gradeMap.get(student.grade).push(student.name);
});

gradeMap.forEach((names, grade) => {
  console.log(`Оценка ${grade}: ${names.join(', ')}`);
});

console.log("Уникальные оценки:", [...gradeMap.keys()]);