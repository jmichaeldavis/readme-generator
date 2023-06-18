// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please provide the title of your project here:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a detailed description of project here:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions here:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any usage information here:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide what license was used here:',
        choices: ['MIT', 'Academic Free License v3.0', 'Eclipse Public License 1.0', 'Microsoft Public License'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide any contributing guidelines here:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests here:',
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Please provide your GitHub Username here:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email here:',
    }
];


function getFormatting(answers) {
  const answerFormat = 
`# ${answers.projectTitle}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Description <a name="description"></a>
${answers.description}

## Installation <a name="installation"></a>
${answers.installation}

## Usage <a name="usage"></a>
${answers.usage}

## Contributing <a name="contributing"></a>
${answers.contributing}

## Tests <a name="tests"></a>
${answers.tests}

## Questions <a name="questions"></a>
If you have any questions, please contact me.
GitHub: github.com/${answers.gitHubUsername}
Email: ${answers.email}`;
    return answerFormat;
}
// inquirer way to do questions:


// When you're done
// TODO: Create a function to write README file
function writeREADME(input) {
    fs.writeFile("./testFiles/README.md", getFormatting(input), (err) =>
        err ? console.log(err) : console.log("README generated!")
    );
}

inquirer.prompt(questions)
.then(function(answers) {
   const userAnswer = getFormatting(answers)
   return userAnswer
})
.then(
    function(answers) {
    fs.writeFile("./testFiles/README.md", answers, (err) =>
         err ? console.log(err) : console.log("README generated!")
    );
})
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();