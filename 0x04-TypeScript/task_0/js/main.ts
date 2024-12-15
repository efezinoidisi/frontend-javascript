interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Canada',
};

const student2: Student = {
  firstName: 'Paul',
  lastName: 'Black',
  age: 25,
  location: 'New York',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  row.textContent = `${student.firstName} (${student.location})`;

  table.appendChild(row);
});

document.body.appendChild(table);
