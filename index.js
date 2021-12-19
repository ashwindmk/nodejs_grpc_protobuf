const fs = require('fs');

const employees = [
    {
        id: 1,
        name: "Alice",
        salary: 1000.50
    },
    {
        id: 2,
        name: "Bob",
        salary: 1200.00
    },
    {
        id: 3,
        name: "Clara",
        salary: 2000.50
    }
];

console.log(JSON.stringify(employees));

fs.writeFileSync('employees.json', JSON.stringify(employees));
