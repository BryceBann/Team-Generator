// Import employee
const Employee = require('./Employee');

//Engineer expands on Employye construtor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calling employee constructor
        super(name, id, email);

        this.github = github;
    }
//take github from input
    getGithub () {
        return this.github
    }
//assign the role
    getRole () {
        return "Engineer";
    }
 }

 module.exports = Engineer;
