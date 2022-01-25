const Employee = require('../lib/Employee');


test('creates an Employee object', ()=>{
    const employee = new Employee('Dave','12345 ','12345@gmail.com');

    expect(employee.name).toEqual(String);
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.Email).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.Id);
    expect(employee.getEmail()).toEqual(employee.Email);
    expect(employee.getRole()).toEqual(employee.role);
});