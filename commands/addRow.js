const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = async function(tableName,options ) {
    //db.run(`INSERT INTO ${tableName} (${columnName}) VALUES(1)`);

    console.log({tableName, options});
    console.log(options.values.split(","))

    for(let i = 0; i < columnsWithValues.length; i++) {
        const data = columnsWithValues[i];
        const columnDataArray = data.split("i");
        const columnName = columnDataArray[0];
        const value = columnDataArray[1];
        console.log({columnName,value});
        //db.run(`INSERT INTO ${tableName} (${columnName}`)
    }
}