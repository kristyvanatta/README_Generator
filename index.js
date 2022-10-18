const inquirer = require('inquirer');
const fs = require('fs');

 const generateMD = ({ title, description, installation, usage, license, contributing, tests, questions}) =>
`# ${title}
## Table of Contents
*[link](#Description)
*[link](#Installation)
*[link](#Usage)
*[link](#License)
*[link](#Contributing)
*[link](#Tests)
*[link](#Questions)

## ${description}
## ${installation}
## ${usage}
## ${license}
//a license badge is added near the top of the file and a notice is added to the license section
## ${contributing}
## ${tests}
## ${questions}
[link](https://github.com/kristyvanatta)
Please feel free to email me with any additional questions
<kristylvanatta@gmail.com>

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
            name: 'Usage',
            message: 'Please describe usage',
        },
        {
            type: 'input',
            name: 'License',
            message: 'Please select your license',
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Please enter ...',
        },
        { 
            type: 'input',
            name: 'Tests',
            message: 'Please enter any tests used.',
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Please enter your LinkedIn URL',
        },
    ])
    .then((answers) => {
        const mdPageContent = generateMD(answers);

        fs.writeFile('README.md', mdPageContent, (err) =>
            err ? console.log(err) : console.log('Successfull creation of README.md!')
        );

    })
