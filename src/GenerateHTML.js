//creating employee and manager cards

const generateIntern = function (intern) {
    return`
    <div class="col-4 mt-3">
    <div class="card h-150">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h5>Intern</h5><i class="material-icons">assignment_ind</i>
        </div>

        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: ${intern.email}</p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
    `;
}

const generateEngineer = function (engineer) {
    return`
    <div class="col-4 mt-3">
    <div class="card h-150">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h5>Intern</h5><i class="material-icons">laptop_mac</i>
        </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: ${engineer.email}</p>
            <p class="github">Github: ${engineer.github}</p>
        </div>
    </div>
</div>
    `;
}

const generateManager = function (manager) {
    return`
    <div class="col-4 mt-3">
    <div class="card h-150">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h5>Intern</h5><i class="material-icons">laptop_mac</i>
        </div>

        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: ${manager.email}</p>
            <p class="github">Github: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
    `;
}

//create loop to run through all assigned roles
generateHTML = (data) => {
    pageArray = [];

    for(let i = 0; i <data.length; i++){
        const employee = data[i];
        const role = employee.getRole();


        if(role === "Manager") {
            const managerCard = generateManager(employee)

            pageArray.push(managerCard)
        }

        if(role === "Intern") {
            const internCard = generateIntern(employee)

            pageArray.push(internCard)
        }

        if(role === "Enginerr") {
            const engineerCard = generateEngineer(employee)

            pageArray.push(engineerCard)
        }
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}


const generatePage = function (employeeCards) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team profiles</span>
        </nav>
    </header>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
           ${employeeCards}
        </div>
    </div>
    

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

</html>
`;
}

module.exports= generateHTML;