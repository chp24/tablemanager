const { Command } = require('commander');
const program = new Command();
const maketable = require('./commands/maketable');
const addRow = require('./commands/addRow');
const deleteColumn = require('./commands/deletecolumn');
const deleteTable = require('./commands/deletetable');
const generateRandomData = require('./commands/generaterandomdata');
const getRows = require('./commands/getRows');
const updateColumnNames = require('./commands/updatecolumnnames');
const updateColumnTypes = require('./commands/updatecolumntype');
const addColumn = require('./commands/addcolumn');

//this is describing the overall program
program
  .name('sqlite3manager')
  .description('CLI to manage sqlite3 database tables')
  .version('0.0.1');

//this is discribing a command
program
  .command('makeTable')
  .description('create a table with a predefined num of string columns labeled c1-cn')
  .argument('<tableName>', 'name of table')
  .option('--columnCount', 'option for number of columns')
  .action(maketable);

program
  .command('updateColumnNames')
  .description('change the name of a column')
  .argument('<tableName>', 'name of table')
  .argument('<oldColumnName>', 'name of old column to select')
  .argument('<newColumnName>', 'name of new column')
  .action(updateColumnNames);

program
  .command('addRow')
  .description('add a row')
  .argument('<tableName>', 'name of table')
  .argument('<columnName>', 'name of column')
  .action(addRow);

program
  .command('addColumn')
  .description('add a column')
  .argument('<tableName>', 'name of table')
  .argument('<newColumnName>', 'name of new column')
  .action(addColumn);

program
  .command('deleteColumn')
  .description('delete a column')
  .argument('<tableName>', 'name of table')
  .argument('<columnName>', 'name of column to delete')
  .action(deleteColumn);

program
  .command('deleteTable')
  .description('delete a table')
  .argument('<tableName>', 'name of table')
  .action(deleteTable);

program
  .command('generateRandomData')
  .description('generates random data')
  .argument('<tableName>', 'name of table')
  .option('<columnName>', 'name of column to generate for')
  .action(generateRandomData);
program
  .command('getRows')
  .description('display all rows of a table')
  .argument('<tableName>', 'name of table')
  .option('--columnNames', 'comma separated list of columns, defaults to *')
  .action(getRows);

// start our cli tool and listen for commands
program.parse();