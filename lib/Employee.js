//Employee construtor
class Employee { 
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    sayHi() {
        return `hi my name is ${this.name}`
    }
}

module.exports = Employee