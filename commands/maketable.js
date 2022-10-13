const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = function(tableName) {
    db.run(`CREATE TABLE ${tableName}(c1 TEXT,c2 TEXT, c3 TEXT, c4 TEXT, c5 TEXT, c6 TEXT, c7 TEXT, c8 TEXT, c9 TEXT, c10 TEXT)`)
    console.log("maketable!")
}