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

const menuQuestion = { //might need to call on generate html page
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
        name: 'github',
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
    name: 'school',
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
        console.log("MANAGERINFO HERE",managerInfo)
        manager = new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber)
        teamArray.push(manager)
        console.log(teamArray)
        promptMenu()
    }) 
    return teamArray;
}

const addEmployee = () => {
    inquirer.prompt(employeeQuestions).then(employeeInfo => {

        let employee;

        if(employeeInfo.role === "Engineer") {
            employee = new Engineer (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.github);
           

        }else if(employeeInfo.role === "Intern") {
            employee = new Intern (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.school)
        }
        teamArray.push(employee)
        console.log(teamArray)
        promptMenu()
     })
}

const writeFile = () => {
    fs.writeFile('./dist/index.html', generateHTML(teamArray), (err) => {
        if (err) {
            console.log(err);
            return
        }else{
            console.log("Your team page is created")
        }
    })
};


//console will close without any answers still no page generaton :( 
addManager() 
// .then(addEmployee())
// .then(teamArray => {
//     return generateHTML(teamArray)
// })

// .then(pageHTML => {
//     return writeFile(pageHTML)
// })
// .catch(err => {
//     console.log(err)
// })
