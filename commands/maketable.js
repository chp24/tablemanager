const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/local_db');

module.exports = function(tableName, options) {
    var columnCount = 10;
    console.log(columnCount);
    if(typeof columnCount == "number")
    {
        columnCount = options.columnCount;
    }
    
        var i = 1;
       const list=[];
        while (i <= columnCount)
        {
            list.push("c"+ i +" TEXT")
            i++;
        }
        console.log(list);
        var columns = list.toString()
        console.log(`CREATE TABLE ${tableName} (${columns})`);
        //db.run(`CREATE TABLE ${tableName} (${columns})`);
        console.log("if worked");
} 