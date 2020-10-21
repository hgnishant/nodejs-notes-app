//const validator = require('validator');
const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    //here u define, what argument for "add" u r expecting and u can also define the traits of property being added
    title: {
      //define the traits of title now
      describe: "Note Title",
      demandOption: true, //bydefault this is false. true means this value is required
      type: "string", //default value is boolean if not defined.
    },
    body: {
        describe: "Note content",
        demandOption: true, 
        type: "string", 
      }
  },
  handler: function () {
    console.log("Title : "+ argv.title +" Body : "+ argv.body);
  },
}); //use node app.js --help : to see addition of this new command

//create a remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note!");
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "List all the created notes",
  handler: () => {
    console.log("listing all the created notes!");
  },
});

//create a read command
yargs.command({
  command: "read",
  describe: "read the chosen note",
  handler: () => {
    console.log("read the chosen note!");
  },
});

//console.log(yargs.argv); if u comment this, console.log inside command won't work.
//u can use yargs.pars() : this way only the console.log inside commands will work
yargs.parse();
