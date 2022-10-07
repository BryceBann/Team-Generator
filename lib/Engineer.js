// Import employee
const Employee = require('./Employee');

//Engineer expands on Employye construtor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calling employee constructor
        super(name, id, email);

        this.github = github;
    }

    getGithub () {
        return this.github
    }

    getRole () {
        return "Engineer";
    }
 }

 module.exports = Engineer;
