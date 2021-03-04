const students = require('./db.json');

const message = ({ name, lastname, score }, minNote) => {
  score >= minNote
    ? console.log(`El estudiante ${name} ${lastname} está aprobado con ${score}.`)
    : console.log(`El estudiante ${name} ${lastname} no alcanzó la nota mínima ${minNote}, su nota es ${score}.`);
};

const upperCaseFirstLetter = (name) => name[0].toUpperCase();

const capitalizeString = string => {
  const stringFirstLetter = upperCaseFirstLetter(string);
  const stringLowerCase = string.toLowerCase().slice(1);
  return stringFirstLetter + stringLowerCase;
}

const studentsCapitalized = students.map((student) => {
  const name = capitalizeString(student.name);
  const lastname = capitalizeString(student.lastname);
  const studentCap = {
    name,
    lastname,
    score: student.score,
  };
  return studentCap;
});

studentsCapitalized.sort((a, b) => b.score - a.score);

const mapApprovedStudents = (students, minNote) => {
  students.map((student) => {
    message(student, minNote);
  });
};

const forEachApprovedStudents = (students, minNote) => {
  students.forEach((student) => {
    message(student, minNote);
  });
};

const forOfApprovedStudents = (students, minNote) => {
  for (const student of students) {
    message(student, minNote);
  }
};

setTimeout(() => {
  console.log("-----------------------MAP------------------------------");
  mapApprovedStudents(studentsCapitalized, 4);
}, 1500);

setTimeout(() => {
  console.log("----------------------FOREACH---------------------------");
  forEachApprovedStudents(studentsCapitalized, 6);
}, 3000);

setTimeout(() => {
  console.log("----------------------FOR-OF----------------------------");
  forOfApprovedStudents(studentsCapitalized, 6);
}, 4500);
