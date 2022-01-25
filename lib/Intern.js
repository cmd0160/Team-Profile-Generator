
function Intern (name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = 'Intern'
};

Intern.prototype.getName = function() {
    return this.name;
}
Intern.prototype.getId = function()  {
    return this.id;
}
Intern.prototype.getEmail = function()  {
    return this.email;
}
Intern.prototype.getSchool = function()  {
    return this.school;
}
Intern.prototype.getRole = function()  {
    return this.role;
}

module.exports = Intern;