
function Manager (name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.role = 'Manager'
};

Manager.prototype.getName = function() {
    return this.name;
}
Manager.prototype.getId = function()  {
    return this.id;
}
Manager.prototype.getEmail = function()  {
    return this.email;
}
Manager.prototype.getRole = function()  {
    return this.role;
}

module.exports = Manager;