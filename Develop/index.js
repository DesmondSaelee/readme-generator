// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions= inquirer.prompt ([
{
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

])
.then((answers) => {
console.log(answers)
})


// TODO: Create a function to write README file
// fs.writeFile('ReadMe', questions[1], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();