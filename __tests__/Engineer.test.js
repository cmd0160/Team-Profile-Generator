const Engineer = require('../lib/Engineer');


test('creates an Engineer object', ()=>{
    const engineer = new Engineer('Dave', 12345 ,'12345@gmail.com', '12345');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getGithub()).toEqual(engineer.github);
    expect(engineer.getRole()).toEqual(engineer.role);
});



