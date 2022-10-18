const connection = require("./connection");

class DataAccess {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployess() {
    return this.connection
      .promise()
      .query(
        'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, COALESCE (CONCAT(manager.first_name, " " , manager.last_name), "N/A") as manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;'
      );
  }

  findAllDepartments() {
    return this.connection.promise().query("SELECT department.id, department.name FROM department ORDER BY id;");
  }

  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
      );
  }
}

module.exports = new DataAccess(connection);
