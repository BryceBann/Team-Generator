// Import employee
const Employee = require('./Employee');

//Manager expands on Employye construtor
 class Manager extends Employee {
    constructor (name, id, email, officeNUmber) {
        //calling employee constructor
        super(name, id, email);

        this.officeNumber = officeNUmber;
    }
//assign role
    getRole () {
        return "Manager";
    }
 }

 module.exports = Manager;