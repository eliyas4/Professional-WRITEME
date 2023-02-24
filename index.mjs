import inquirer from 'inquirer';
import fs from "fs/promises";
// These are the questions that the inquirer will ask
let {name, description, installation, usage, contributions, tests, license, email} = await inquirer
  .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of your project",
    },
    {
        type: "input",
        name: "description",
        message: "write a description of your project:"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions to install your project?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information of your project?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contributing guidelines for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project',
    },
    {
        type: 'list',
        message: 'What is the appropriate license for your application?',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'MIT'],
        default: 'Apache'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address:',
    }
  ])
// This part of the code takes the values of each inquirer question and constructs the README accordingly 
  let readmeText = `
  # ${name}
  
  ## Project Description 
  ${description} ${email}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#test)
  - [License](#license)

  ## Installation 
  ${installation}

  ## Usage 
  ${usage}

  ## Contributions 
  ${contributions}

  ## Tests 
  ${tests}

  ## License
  ${generateLicense(license)}

    `
 // This functions generates the badges for the licenses 
  function generateLicense(license) {

    if(license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "boost") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"

    }
    else if (license === "BSD") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

    }
    else{
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    } 
  }
// This writes the constructed README into the README file 
fs.writeFile("README.md", readmeText)
 
  