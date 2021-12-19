const Schema = require('./employees_pb');
const fs = require('fs');

const e1 = new Schema.Employee();
e1.setId(4);
e1.setName("Danny");
e1.setSalary(1250.0);

const e2 = new Schema.Employee();
e2.setId(5);
e2.setName("Erik");
e2.setSalary(1350.75);

const e3 = new Schema.Employee();
e3.setId(6);
e3.setName("Fruti");
e3.setSalary(1550.5);

const employees = new Schema.Employees();
employees.addEmployees(e1);
employees.addEmployees(e2);
employees.addEmployees(e3);

// Serialize
const bytes = employees.serializeBinary();
console.log('Serialized binary: ' + bytes);
fs.writeFileSync('employees.bin', bytes);

// Deserialize
const demployees = Schema.Employees.deserializeBinary(bytes);
console.log('Deserialized data: ' + demployees);
