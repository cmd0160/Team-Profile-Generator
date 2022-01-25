const inquirer = require("inquirer");
const { writeFile } = require('./utils/generate_file_template.js')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/html_tmp')


let newTeam = [];


function newEmployee() {
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is your first and last name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your first and last name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID number?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your employee ID number");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (value) => {
        // Regex mail check (return true if valid mail)
        let pass = value.match(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
        );
        if (pass) {
          return true;
        }

        return "Please enter a valid email Address";
      },
    },
    // When manager is selected from the inital list
    {
      type: "input",
      name: "officeNumber",
      message: "What is the Manager's office number?",

      when: function ({ role }) {
        if (role === `Manager`) {
          return true;
        } else {
          return false;
        }
      },
    },
    // When Intern in chosen from the inital list
    {
      type: "input",
      name: "school",
      message: "What is your Intern's school?",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please enter your Intern's school!");
          return false;
        }
      },
      when: function ({ role }) {
        if (role === `Intern`) {
          return true;
        } else {
          return false;
        }
      },
    },
        // When Engineer in chosen from the inital list
        {
          type: "input",
          name: "github",
          message: "Please enter your GitHub profile information.",
          validate: (name) => {
            if (name) {
              return true;
            } else {
              console.log("Enter your GitHub profile information.");
              return false;
            }
          },
          when: function ({ role }) {
            if (role === `Engineer`) {
              return true;
            } else {
              return false;
            }
          },
        },
  ]).then(answers => {
    const {name, id, email} = answers;
    if(answers.role === 'Manager') {
      newTeam.push(new Manager(name, id, email, answers.office));
    } else if(answers.role === 'Intern') {
      newTeam.push(new Intern(name, id, email, answers.school));
    } else if(answers.role === 'Engineer') {
      newTeam.push(new Engineer(name, id, email, answers.github)); 
    }
    inquirer.prompt([
      {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Would you like to add another team member?',
        default: false
      }
    ])
    .then(ans => {
      if(ans.newEmployee){
        newEmployee();
      }else{
        console.log('Done!');
        // writeFile('./dist/index.html', generateHTML(newTeam))
        // .then( response => console.log(response.message))
      }
    })
  })
}

// Function call to initialize app
newEmployee()


// GIVEN a command-line application that accepts user input

// Node Stuff

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// HTML stuff

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
