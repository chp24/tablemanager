const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = async function(tableName, options) {
    const columnNames = options.columnNames || "*";
    const query = `select ${columnNames} from ${tableName}`;
    const results = await runQuery(query);
    console.log(results);
}

function runQuery(query){
    return new Promise(resolve => {
        //connect to db
        const list=[];
    db.serialize(() => {
        //running query and executing function for each row
        db.each(query, (err, row) => {
            list.push(row);
            //when no more rows, fire the below function
        }, ()=>{
            console.log('done');
            db.close();
            resolve(list);
        })
    });
    ;
})}