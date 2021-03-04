const students = require("./db.json");

const upperCaseFirstLetter = (name) => name[0].toUpperCase();

const capitalizeString = (string) => {
  const stringFirstLetter = upperCaseFirstLetter(string);
  const stringLowerCase = string.toLowerCase().slice(1);
  return stringFirstLetter + stringLowerCase;
};

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

const message = ({ name, lastname, score }, minNote) => {
  if (score >= minNote) {
    return `El estudiante ${name} ${lastname} está aprobado con ${score}.`;
  } else {
    return `El estudiante ${name} ${lastname} no alcanzó la nota mínima ${minNote}, su nota es ${score}.`;
  }
};

const mapApprovedStudents = (students, minNote) => {
  let msg = students.map((student) => {
    return message(student, minNote);
  });
  return msg;
};

const forEachApprovedStudents = (students, minNote) => {
  let msg = [];
  students.forEach((student) => {
    msg.push(message(student, minNote));
  });
  return msg;
};

const forOfApprovedStudents = (students, minNote) => {
  let msg = [];
  for (const student of students) {
    msg.push(message(student, minNote));
  }
  return msg;
};

setTimeout(() => {
  console.log("=============================================================");
  console.log("Esta es una funcion asincrónica que se resuelve en 4 segundos");
  console.log("=============================================================");
}, 4000);

const promiseMap = new Promise((resolve, reject) => {
  const result = mapApprovedStudents(studentsCapitalized, 4);
  if (Array.isArray(result)) {
    resolve(result);
  } else {
    reject("Algo falló");
  }
});

const promiseForEach = new Promise((resolve, reject) => {
  const result = forEachApprovedStudents(studentsCapitalized, 6);
  if (Array.isArray(result)) {
    resolve(result);
  } else {
    reject("Algo falló");
  }
});

const promiseForOf = new Promise((resolve, reject) => {
  const result = forOfApprovedStudents(studentsCapitalized, 8);
  if (Array.isArray(result)) {
    resolve(result);
  } else {
    reject("Algo falló");
  }
});

setTimeout(() => {
  promiseMap
    .then((result) => {
      console.log("-----------------------PROMISE--------------------------");
      console.log(result);
    })
    .catch((err) => console.log(err));
}, 1000);

Promise.all([promiseMap, promiseForEach, promiseForOf])
  .then((result) => {
    console.log("-----------------------PROMISE-ALL------------------------");
    console.log(result);
  })
  .catch((err) => console.log(err));
