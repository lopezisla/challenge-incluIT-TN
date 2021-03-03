const students = [
  {
    name: "JOHN",
    lastname: "DOE",
    score: 4,
  },
  {
    name: "EVELYN",
    lastname: "JACKSON",
    score: 8,
  },
  {
    name: "JAMES",
    lastname: "SHAW",
    score: 2,
  },
];
console.log("El array students original es:");
console.log(students);
console.log("---------------------------------------------------------");
console.log("El array students ordenado por score de mayor a menor es:");
students.sort((a, b) => b.score - a.score);
console.log(students);
console.log(
  "------------------------------------------------------------------"
);
console.log(
  "El array students con propiedades name y lastname capitalizadas es:"
);
const studentsCapitalized = students.map((student) => {
  let name = student.name.toLowerCase();
  let firstletter = name[0].toUpperCase();
  name = name.slice(1);
  name = firstletter + name;
  let lastname = student.lastname.toLowerCase();
  firstletter = lastname[0].toUpperCase();
  lastname = lastname.slice(1);
  lastname = firstletter + lastname;
  const studentCap = {
    name: name,
    lastname: lastname,
    score: student.score,
  };
  return studentCap;
});
console.log(studentsCapitalized);
console.log(
    "------------------------------------------------------------------"
  );
  console.log(
    "El listado de estudiantes aprobados y no aprobados con .map() es:"
  );

const studentsApproved = function (students, minNote) {
   
  students.map((student) => {
    if (student.score >= minNote) {
      console.log(
        `El estudiante ${student.name} ${student.lastname} está aprobado con ${student.score}.`
      );
    } else {
      console.log(
        `El estudiante ${student.name} ${student.lastname} no alcanzó la nota mínima ${minNote}, su nota es ${student.score}.`
      );
    }
  });
};

studentsApproved(studentsCapitalized, 4);
console.log(
    "------------------------------------------------------------------"
  );
