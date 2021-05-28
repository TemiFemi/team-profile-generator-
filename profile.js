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
            addNewwmp()
        });
}