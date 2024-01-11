import { table } from "console";

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Silver",
  lastName: "Mumbi",
  age: 22,
  location: "Kenya",
};
const student2: Student = {
  firstName: "Anyssa",
  lastName: "Thomas",
  age: 4,
  location: "Nanyuki",
};
const studentsList: Array<Student> = [student1, student2];

export function studentInterface(studentsList: Array<Student>) {
  const table = document.createElement("table");
  const header = table.insertRow();
  header.insertCell().textContent = "First Name";
  header.insertCell().textContent = "Location";
  header.cells[0].style.fontWeight = header.cells[1].style.fontWeight = "bold";

  studentsList.forEach((student) => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
  });
  document.body.appendChild(table);
}

studentInterface(studentsList);
