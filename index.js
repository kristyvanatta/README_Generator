const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = ({ title, description, installation, usage, license, contributing, tests, questions}) =>
`# ${title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${description}
## Installation
${installation}
## Usage
${usage}
## License
${license}

## Contributing
${contributing}
## Tests
${tests}
## Questions
${questions}

[GitHub](https://github.com/kristyvanatta)

Please feel free to email me with any additional questions  

<kristylvanatta@gmail.com>  

[video](https://drive.google.com/file/d/1LFPwUc3_FjHPuSNyoNU4tj2Gknow9FWH/view?usp=sharing)


`;

inquirer

.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your file?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your file.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe your installation procedure',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe usage',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select your license',
            choices: [
                {
                    name: 'MIT', 
                    value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                },
                {
                    name: 'GNU',
                    value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                },
                {
                    name: 'Eclipse',
                    value: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
                }
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter instructions on how to contribute.',
        },
        { 
            type: 'input',
            name: 'tests',
            message: 'Please enter any tests used.',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your GitHub user name',
        },
    ])
    .then((userInput) => {
        const mdPageContent = generateMD(userInput);

        fs.writeFile('README.md', mdPageContent, (err) =>
            err ? console.log(err) : console.log('Successfull creation of README.md!')
        );

    })
