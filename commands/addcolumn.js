const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = async function(tableName, columnName) {
    
    console.log({tableName, columnName});
    db.run(`ALTER TABLE ${tableName} ADD ${columnName} TEXT`);

    console.log("addColumn!")
}