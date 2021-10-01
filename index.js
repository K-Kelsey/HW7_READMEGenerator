//file system module
const fs = require('fs');
//NPM inquirer package
const inquirer = require('inquirer');
//retrieves generateMarkdown.js module
const MarkdownGenerator = require('./utils/generateMarkdown');

//array of questions for user input
inquirer.prompt ([
    {
        type: 'input',
        name: 'user_name',
        message: 'What is your name?'
    },

    {
        type: 'input',
        name: 'github_username',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email adress?'
    },

    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license(s) do you wish to use for your project?',
        choices: ['MIT', 'Apache 2.0', 'IBM', 'Mozilla', 'None']
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation instructions for this project?'
    },

    {
        type: 'input',
        name: 'uses',
        message: 'Provide ways to use this program if applicable.'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How can users test to this project?'
    },

    {
        type: 'input',
        name: 'command',
        message: 'What command will allow users to run this project?'
    }
])
.then((response) => {
    const data = MarkdownGenerator(response);
    fs.writeFile("READMEgenerator.md", data, (err) =>
    err ? console.error(err) : console.log('Markdown succesfully made!')
    );
});
