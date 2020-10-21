//it contains the information/notes for various commands used in this project
//this file will never be executed 

//const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
console.log(chalk.blue('Success!'));
console.log(process.argv); //argv denotes the argument vector.
//run the file as : node app.js nishant
//and output will be as shown below:
// Success!
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'G:\\GITSourceCode\\nodejs-notes-app\\app.js',
//   'nishant'
// ]
//the first 2 values will always be there and hence ur dat will start from argv[2]
//console.log(yargs.argv);//{ _: [], '$0': 'app.js' } is output for normal run
// run as  : node app.js add --title="this is my first note"
// and yargs will give you the parsed output:
// { _: [ 'add' ], title: 'this is my first note', '$0': 'app.js' }
// run as :  node app.js --help  
// and yargs give :
// Options:
//   --help     Show help                                                 [boolean]
//   --version  Show version number
//u can customize the yargs version, which is 1.0.0 by default and u can see by typing node app.js --version
// yargs.version('1.1.0');
// console.log(yargs.argv);

yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function () {
      console.log("Adding a new note!");
    },
  }); //use node app.js --help : to see addition of this new command
//above works perfectly as well