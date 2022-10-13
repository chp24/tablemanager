const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = async function(tableName,columnName ) {
    db.run(`INSERT INTO ${tableName} (${columnName}) VALUES(1),`);

    console.log("addrow!")
}