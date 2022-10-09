//Linking all pages for page creation and team profiles
const generateHTML = require('./src/generateHTML')

const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')


const fs = require('fs')
const inquirer = require('inquirer')


const managerQuestions = [
    {
        type: 'input',
        name: 'name',
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
        name: 'id',
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
        name: 'email',
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
        name: 'role',
        message: "What is the employee's role ",
        choices: ['Engineer', 'Intern']
    
    },

    {
        type: 'input',
        name: 'name',
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
        name: 'id',
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
        name: 'email',
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
        when: (input) => input.role === 'Engineer',
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
    when: (input) => input.role === 'Intern',
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
        manager = new Manager (managerQuestions.name, managerQuestions.id, managerQuestions.email, managerQuestions.officeNumber)
        teamArray.push(managerInfo)
        console.log(teamArray)
        promptMenu()
    }) 
    return teamArray;
}

const addEmployee = () => {
    inquirer.prompt(employeeQuestions).then(employeeInfo => {

        let employee;

        if(employeeQuestions.role === "Engineer") {
            employee = new Engineer (employeeQuestions.name, employeeQuestions.id, employeeQuestions.email, employeeQuestions.github);
           

        }else if(employeeQuestions.role === "Intern") {
            employee = new Intern (employeeQuestions.name, employeeQuestions.id, employeeQuestions.email, employeeQuestions.school)
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

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) {
            console.log(err);
            return
        }else{
            console.log("Your team page is created")
        }
    })
};


addManager((teamArray) => {
    return generateHTML(teamArray)
})
