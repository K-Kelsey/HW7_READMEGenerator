function renderLicenseBadge(license) {
    return ` ![${license} license] (https://img.shields.io/badge/license-${license}-Red.svg)`
}

function renderLicenseLink(license) {
    license !== 'None' ? `* [License](license)`:''
}

function renderLicenseSection(license) {
    if(license !== 'None') {
        return (
            ` # License
            This project is license under the ${license} license
            `
        )
    }
    return `There were no licensed used`
}

//generate the markdown using the answers from the prompted questions
function generateMarkdown(data) {
    return `# ${data.user_name}
    ${renderLicenseBadge(data.license)}
## INSTRUCTIONS
    ${data.description}

    ##Table of Contents
    *[Installation] (#installation)
    *[Usage] (#usage)
    ${renderLicenseLink(data.license)}
    *[Contributing] (#contributing)
    *[Tests] (#tests)
    *[Questions](#questions)

    ##Installation
    ${data.installation}

    ##Usage
    ${data.uses}

    ${renderLicenseSection(data.license)}

    ##Contributing
    ${data.contribution}

    ##Tests
    ${data.tests}

    ##Questions

    If you have any questions regarding the repo published, please feel free to reach out to me at ${data.email},
    if you would like to look at the code that made this generator, you can find this under my repos in GitHub. My GitHub
    username is ${data.github_username}
    `;
}

module.exports = generateMarkdown;