const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = function(tableName, columnName) {
    var query = (`ALTER TABLE ${tableName} DROP ${columnName}`);
    //console.log(`ALTER TABLE ${tableName} DROP (${columnName})`);
    db.run(query);
    console.log("deletecolumn!");
}