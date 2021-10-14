console.clear();
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
const inquirer = require("inquirer");
const generateHTML = require("./lib/generateHTML");
const fs = require("fs");

let employeeList = [];

// function that is the first to run
const menu = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        message: "What would you like to do?",
        type: "list",
        choices: ["add-employee", "finished"],
      },
    ])
    .then((answer) => {
      const { choices } = answer;
      console.log(choices);
      if (choices == "add-employee") {
        // employeeQuestions() creates employees
        employeeQuestions();
      } else if (choices == "finished") {
        //finished takes data from the employee list, using generateHTML it takes in employee
        fs.writeFile("index.html", generateHTML(employeeList), (err) =>
          err ? console.log(err) : console.log("created")
        );
      } else {
        menu();
      }
    });
};

// function that lists employee choices
const employeeQuestions = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        message: "What is the employees role?",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      const { choices } = answer;
      console.log(choices);
      if (choices == "Manager") {
        manager();
      } else if (choices == "Engineer") {
        engineer();
      } else if (choices == "Intern") {
        intern();
      }
    });
};

const manager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the Managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What's the Managers id?",
      },
      {
        type: "input",
        name: "email",
        message: "What's the Managers email",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What's the Mangers office number",
      },
    ])
    .then((res) => {
      console.log(res);
      //manager takes in response given to us in inquiry and pushes into the employee list
      let manager = new Manager(res.name, res.id, res.email, res.officeNumber);
      employeeList.push(manager);
      console.log(employeeList);
      menu();
    });
};

const engineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What's the engineers id?",
      },
      {
        type: "input",
        name: "email",
        message: "What's the engineers email",
      },
      {
        type: "input",
        name: "github",
        message: "What's the engineers github",
      },
    ])
    .then((res) => {
      console.log(res);
      //engineer takes in response given to us in inquiry and pushes into the employee list
      let engineer = new Engineer(res.name, res.id, res.email, res.github);
      employeeList.push(engineer);
      console.log(employeeList);
      menu();
    });
};

const intern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What's the interns id?",
      },
      {
        type: "input",
        name: "email",
        message: "What's the interns email",
      },
      {
        type: "input",
        name: "school",
        message: "What's the interns school",
      },
    ])
    .then((res) => {
      console.log(res);
      //intern takes in response given to us in inquiry and pushes into the employee list
      let intern = new Intern(res.name, res.id, res.email, res.school);
      employeeList.push(intern);
      console.log(employeeList);
      menu();
    });
};

menu();
