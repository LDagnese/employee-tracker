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
          name: "Add a department",
          value: "addDepartment",
        },
        {
          name: "Add a role",
          value: "addRole",
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
      case "addDepartment":
        addDepartment();
        break;
      case "addRole":
        addRole();
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

function addDepartment() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?",
    },
  ]).then((res) => {
    let department = res;
    data
      .createDepartment(department)
      .then(() => console.log(`Department ${department.name} added`))
      .then(() => showPrompt());
  });
}

function addRole() {
  data.findAllDepartments().then(([rows]) => {
    let departments = rows;
    const choices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    prompt([
      {
        name: "title",
        message: "What is the name of the role?",
      },
      {
        name: "salary",
        message: "How much does this role make a year?",
      },
      {
        type: "list",
        name: "department_id",
        message: "Which department is this role in?",
        choices: choices,
      },
    ]).then((role) => {
      data
        .createRole(role)
        .then(() => console.log(`Role of ${role.title} added`))
        .then(() => showPrompt());
    });
  });
}

function quit() {
  console.log("\n");
  console.log("Bye");
  process.exit();
}

showPrompt();
