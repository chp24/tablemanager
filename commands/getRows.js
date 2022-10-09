const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = function(tableName, options) {
    const columnNames = options.columnNames || "*";
    const query = `select ${columnNames} from ${tableName}`;
    const results = runQuery(query);
    console.log(results);
}

function runQuery(query){
    db.serialize(() => {
        db.each(query, (err, row) => {
            console.log(row);
        }, ()=>{
            db.close();
        })
    });
}
    
