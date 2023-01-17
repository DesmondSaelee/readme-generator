// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const generateReadme = ({ title, Description, Installation , Usage, License, Contributing, Tests, Questions}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">The name of my project is: ${title}</h1>
      <ul class="list-group">
        <li class="list-group-item">Description: ${Description}</li>
        <li class="list-group-item">Installation Instructions: ${Installation}</li>
        <li class="list-group-item">Usage: ${Usage}</li>
        <li class="list-group-item">License: ${License}</li>
        <li class="list-group-item">How to Contribute: ${Contributing}</li>
        <li class="list-group-item">How to test: ${Tests}</li>
        <li class="list-group-item">How to Ask Questions: ${Questions}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

const readmeQuestions= inquirer.prompt ([
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
    name: 'Installation',
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
const readmeContent = generateReadme(answers);

fs.writeFile('README.md', readmeContent, (err) =>{
  err ? console.error(err) : console.log('Success!');
})

});

// function writeToFile(fileName, data) {} - this is the starter code original

// TODO: Create a function to write README file
// fs.writeFile('README.md', questions, (err) =>
//   err ? console.error(err) : console.log('Success!')
// );



// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();