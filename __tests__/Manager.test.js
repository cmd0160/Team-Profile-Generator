const Manager = require('../lib/Manager');


test('creates an manager object', ()=>{
    const manager = new Manager('Dave', 12345 ,'12345@gmail.com', '#123');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getRole()).toEqual(manager.role);
});