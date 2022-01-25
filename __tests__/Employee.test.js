const Employee = require('../lib/Employee');


test('creates an Employee object', ()=>{
    const employee = new Employee('Dave', 12345 ,'12345@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getRole()).toEqual(employee.role);
});



