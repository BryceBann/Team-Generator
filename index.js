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
        name: 'Manager',
        message: 'Are you the manager',

    }
]

const menuQuestion = {
    type: 'list',
    name: 'addFinish',
    message: 'What would you like to do next',
    choices: ['Add employee', 'Finish HTML page']

}

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
        console.log(managerInfo)
        promptMenu()
    }) 
}

const addEmployee = () => {}

const writeFile = data => {}

const employee1 = new Employee('bryce',45, 'lol@gmail.com')
console.log(employee1.name)
console.log(employee1.sayHi())

addManager()