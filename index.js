//Linking all pages for page creation and team profiles
const generateHTML = require('./src/GenerateHTML');

const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const fs = require('fs');
const inquirer = require('inquirer');


const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Enter manager name',
        validate: mnInput => {
            if(mnInput){
                return true;
            }else{
                console.log('Please enter manager name.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'Enter manager ID number',
        validate: idInput => {
            if(idInput){
                return true;
            }else{
                console.log('Please enter manager ID number.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter manager email',
        validate: emailInput => {
            if(emailInput){
                return true;
            }else{
                console.log('Please enter manager email.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number',
        validate: onInput => {
            if(onInput){
                return true;
            }else{
                console.log('Please enter manager office number.');
                return false;
            }
        }
    },

]

const menuQuestion = {
    type: 'list',
    name: 'addFinish',
    message: 'What would you like to do next',
    choices: ['Add employee', 'Finish HTML page']

}

const employeeQuestions = [
    {
        type: 'list',
        name: 'employeeRole',
        message: "What is the employee's role ",
        choices: ['Engineer', 'Intern']
    
    },

    {
        type: 'input',
        name: 'employeeName',
        message: 'Enter employee name',
        validate: enInput => {
            if(enInput){
                return true;
            }else{
                console.log('Please enter employee name.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'employeeID',
        message: 'Enter employee ID',
        validate: eidInput => {
            if(eidInput){
                return true;
            }else{
                console.log('Please enter employee ID.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter employee email',
        validate: eeInput => {
            if(eeInput){
                return true;
            }else{
                console.log('Please enter employee email.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Github',
        message: 'Enter github username',
        when: (input) => input.employeeRole === 'Engineer',
        validate: ghInput => {
            if(ghInput){
                return true;
            }else{
                console.log('Please enter Github username.');
                return false;
            }
        }
    },

    {
    type: 'input',
    name: 'School',
    message: "Enter intern's school",
    when: (input) => input.employeeRole === 'Intern',
    validate: isInput => {
        if(isInput){
            return true;
        }else{
            console.log("Please enter intern's school.");
            return false;
        }
    }
},

{
    type: 'confirm',
    name: 'confrimAdd',
    message: 'Would you like to add more team members?',
    default: false
}

];

const teamArray = [];

const promptMenu = () => {
inquirer.prompt(menuQuestion).then(answer => {

    if(answer.addFinish === 'Add employee'){
        addEmployee()
    }else{
        writeFile()
    }

})
}


const addManager = () => {
    inquirer.prompt(managerQuestions).then(managerInfo => {
        let manager;
        manager = new Manager (managerName, id, email, officeNumber)
        teamArray.push(managerInfo)
        console.log(teamArray)
        promptMenu()
    }) 
}

const addEmployee = () => {
    inquirer.prompt(employeeQuestions).then(employeeInfo => {

        let employee;

        if(employeeInfo.role === "Engineer") {
            employee = new Engineer (name, id, email, github);
           

        }else if(employeeInfo.role === "Intern") {
            employee = new Intern (name, id, email, school)
        }
        teamArray.push(employeeInfo)
        console.log(teamArray)

        if(employeeInfo.confrimAdd) {
            return addEmployee(teamArray)
        }else{
            return teamArray;
        }
    })
}

const writeFile = data => {}


addManager()