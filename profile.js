const Manager = require("./Library/manager");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OutPut = path.resolve(__dirname, "output");
const outPath = path.join(OutPut, "team.html");

const render = require("./Library/render");

const employeeQuestions = [];
const employees = [];

// using inquirer to get info about the team members
// create objects for each team member

// manager questions 
function managerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID of the employee?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the email of the employee?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the office number of the employee?"
            },
        ])
        .then(function (managerAnswers) {
            console.log(managerAnswers);
            const manager = new Manager(
                managerAnswers.name,
                managerAnswers.id,
                managerAnswers.email,
                managerAnswers.officeNumber

            );
            employees.push(manager);
            NewEmployee()
        });
}

// Engineer Questions
function engineerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's id?",
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's Github account?"
            },

        ])
        .then(function (engineerAnswers) {
            console.log(engineerAnswers);
            const engineer = new Engineer(
                engineerAnswers.name,
                engineerAnswers.id,
                engineerAnswers.email,
                engineerAnswers.github
            );
            employees.push(engineer)
            NewEmployee()
        });
};

// Intern Questions
function internPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
            },

            {
                type: "input",
                name: "id",
                message: "What is the emplpoyee's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What school did the employee go to?",
            },
        ])

        .then(function (internAnswers) {
            console.log(internAnswers);
            const intern = new Intern(
                internAnswers.name,
                internAnswers.id,
                internAnswers.email,
                internAnswers.school
            );
            employees.push(intern);
            NewEmployee();
        });
}

//Function that adds a new employee
function NewEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "selection",
                message: "Choose the team member you would like to add.",
                choices: ["Manager", "Engineer", "Intern", "Build my team"],
            },
        ])
        .then(function (answers) {
            switch (answers.selction) {
                case "Manager":
                    managerPrompt();
                    break;
                case "Engineer":
                    engineerPrompt();
                    break;
                case "Intern":
                    internPrompt();
                    break;
                default:
                    teamEmployee();
            }
        });
}

// Once the user inputs all employee information, this functin will call the 'render' function and will generate and return a block of HTML.
function teamEmployee() {
    return fs.writeFileSync(outPath, render(employees))
}
NewEmployee();

