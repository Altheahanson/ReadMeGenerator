// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Enter the Project title?",
        type: "input",
        name: "title",
    },
    {
        message: "Enter the GitHub Repository title for the Project? (No Spaces)",
        type: "input",
        name: "repoURL",
    },
    {
    message: "Enter the GitHub Pages URL for the Project? '(http(s)://)",
    type: "input",
    name: "deployedURL",
    },
    {
        message: "Enter a brief Project description?",
        type: "input",
        name: "description",
    },
    {
        message: "Enter how to use the Project?",
        type: "input",
        name: "usage",
    },
    {
        message: "Choose the license that applies to the Project?",
        type: "list",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: "license",
      },
      {
        message: "What needs to be known about contributing to the Project?",
        type: "input",
        name: "contributing",
      },
      {
        message: "Enter any test instructions for the Project?",
        type: "input",
        name: "tests",
      },
      {
        message: "Enter your GitHub Username?",
        type: "input",
        name: "username",
      },
      {
        message: "Enter your email address.",
        type: "input",
        name: "email",
      },
      {
        message: "What is the copyright year?",
        type: "input",
        name: "year",
      },
      {
        message: "Type your full name?",
        type: "input",
        name: "name",
      },
];

// TODO: Create a function to write README file
function writeFile(fileName,data) {

    fs.writeFile(fileName, data, function(err) {
 
    if (err) {
        return console.log(err)
    } else {
        console.log("Success!")
    }
})
console.log(data);
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        writeFile("./output/README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
