// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
},
{
    type: 'input',
    name: 'Description',
    message: 'Enter a description of your project.'
},
{
    type: 'input',
    name: 'Installation Instructions',
    message: 'Enter Installation Instructions'
},
{
    type: 'input',
    name: 'Usage',
    message: 'What is your project used for?'
},
{
    type: 'input',
    name: 'License',
    message: 'What license does your project have?'
},
{
    type: 'input',
    name: 'Contributing',
    message: 'How can other developers contribute to your project?'
},
{
    type: 'input',
    name: 'Tests',
    message: 'How can other developers test your project?'
},
{
    type: 'input',
    name: 'Questions',
    message: 'How can other developers ask you questions about your project?'
},

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();