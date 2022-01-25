const Intern = require('../lib/Intern');


test('creates an intern object', ()=>{
    const intern = new Intern('Dave', 12345 ,'12345@gmail.com', 'school');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getSchool()).toEqual(intern.school);
    expect(intern.getRole()).toEqual(intern.role);
});



