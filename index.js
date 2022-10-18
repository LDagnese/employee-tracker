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
      default:
        quit();
    }
  });
}

function viewEmployees() {
  data
    .findAllEmployess()
    .then(([rows]) => {
      console.table(rows);
    })
    .then(() => showPrompt());
}

function quit() {
  console.log("Bye");
  process.exit();
}

showPrompt();
