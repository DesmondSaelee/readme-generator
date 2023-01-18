// TODO: Include packages needed for this application- done
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input- done


// TODO: Create a function to write README file- done


// TODO: Create a function to initialize app- done

// Creating a function with multiple paramaters to reference user input answers using jquery.
function init() {
  const generateReadme = ({ title, Description, Installation, Usage, License, Contributing, Tests, Questions, Username, Email }) =>
    ` 
# ${title}    

[Installation](#installation)
## Table of Contents: [License](#License:)   [Description](#Description:)   [Installation](#Installation:)    [Contributing](#Contributing:)   [Tests](#Tests:)   [Questions](#Questions:)
[![GitHub license](https://img.shields.io/badge/license-${License}-blue.svg)](https://img.shields.io/badge/license-${License}-blue.svg)
## License: 
### The application is covered under the ${License} license


## Description:
    ${Description}

## Installation:
     ${Installation}

## Usage:
     ${Usage}



## Contributing:
     ${Contributing}

## Tests:
     ${Tests}

## Questions:
     How to contact me:
     ${Questions}
     ${Email}
     ${Username} [Link](https://github.com/${Username})
     `

// Using multiple objects to prompt for user input and grabbing the info to create a ReadME.
  const readmeQuestions = inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type: 'list',
      name: 'License',
      message: 'What license does your project have?',
      choices: ['MIT', 'apache_2.0', 'The_Unlicense']
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
      message: 'Enter Usage Information.'
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
      name: 'Username',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your Email address?'
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'How can other developers reach you about your project?'
    }

  ])
  // Creating const to equal the user input answers.
    .then((answers) => {
      console.log(answers)
      const readmeContent = generateReadme(answers);

  // Creating ReadME file using user input
      fs.writeFile('README.md', readmeContent, (err) => {
        err ? console.error(err) : console.log('Success!');
      })

    });
};

// Function call to initialize app- done
init();