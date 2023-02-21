import inquirer from 'inquirer';
import fs from "fs/promises";

let {Name, Description, Installation, Usage, Email} = await inquirer
  .prompt([
    {
        type: "input",
        name: "Name",
        message: "What is the name of your project",
    },
    {
        type: "input",
        name: "Description",
        message: "write a description of your project:"
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the instructions to install your project?', 
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage information of your project?',
    },

//    {
//        type: 'input',
//        message: 'What are the contribution guidelines of your project?',
//        name: 'guidelines',
//    },
//    {
//        type: 'list',
//        message: 'Which licesnse will you be using for your application?',
//        name: 'license',
//        choices: ['Apache', 'Boost', 'BSD', 'CC0'],
//        default: 'Apache'
//    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address:',
    }

  ])

  let readmeText = `
  # ${Name}
  
  ## Project Description 
  ${Description}

  ## Installation 
  ${Installation}

  ## Usage 
  ${Usage}

  ## Email 
  ${Email}

    `
  

    fs.writeFile("README.md", readmeText)
    console.log()
  