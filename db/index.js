const connection = require("./connection");

class DataAccess {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployess() {
    return this.connection.promise().query("SELECT * FROM employee");
  }
}

module.exports = new DataAccess(connection);
