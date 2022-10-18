const { prompt } = require("inquirer");
const data = require("./db");
require("console.table");

console.log("EMPLOYEE MANAGER");

function showPrompt() {
  prompt([
    {
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all departments",
          value: "viewAllDepartments",
        },
        {
          name: "View all roles",
          value: "viewAllRoles",
        },
        {
          name: "View all employess",
          value: "viewAllEmployees",
        },
        {
          name: "Quit",
          value: "quit",
        },
      ],
    },
  ]).then((res) => {
    let option = res.option;
    switch (option) {
      case "viewAllEmployees":
        viewEmployees();
        break;
      case "viewAllDepartments":
        viewDepartments();
        break;
      case "viewAllRoles":
        viewRoles();
        break;
      default:
        quit();
    }
  });
}

function viewEmployees() {
  data
    .findAllEmployess()
    .then(([rows]) => {
      console.log("\n");
      console.table(rows);
    })
    .then(() => showPrompt());
}

function viewDepartments() {
  data
    .findAllDepartments()
    .then(([rows]) => {
      console.log("\n");
      console.table(rows);
    })
    .then(() => showPrompt());
}

function viewRoles() {
  data
    .findAllRoles()
    .then(([rows]) => {
      console.log("\n");
      console.table(rows);
    })
    .then(() => showPrompt());
}

function quit() {
  console.log("\n");
  console.log("Bye");
  process.exit();
}

showPrompt();
