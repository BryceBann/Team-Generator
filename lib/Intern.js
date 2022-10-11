// Import employee
const Employee = require('./Employee');

//Intern expands on Employye construtor
class Intern extends Employee {
    constructor (name, id, email, school) {
        //calling employee constructor
        super(name, id, email);

        this.school = school;
    }
//taking the school from input
    getSchool () {
        return this.school
    }
//assign role
    getRole () {
        return "Intern";
    }
 }

 module.exports = Intern;
