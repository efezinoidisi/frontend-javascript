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

table.innerHTML = `
<thead>
<tr>
<th>First name</th>
<th>Location</th>
</tr>
</thead>

<tbody id="table-body">

</tbody>
`;
document.body.appendChild(table);

const tableBody = document.getElementById('table-body');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  row.innerHTML = `
  <td>${student.firstName}</td>
  <td>${student.location}</td>
  `;

  tableBody.appendChild(row);
});
