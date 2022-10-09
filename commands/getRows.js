const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = function(tableName, options) {
    const columnNames = options.columnNames || "*";
    const query = `select ${columnNames} from ${tableName}`;
    const results = runQuery(query);
    console.log(results);
}

function runQuery(query){
    //connect to db
    db.serialize(() => {
        //running query and executing function for each row
        db.each(query, (err, row) => {
            console.log(row);
            //when no more rows, fire the below function
        }, ()=>{
            console.log('done');
            db.close();
        })
    });
}
    
