/* ToDo Application Main Application JS File */

// Loaded Modules
var notes = require('./notes-manager');
var argv = require('yargs').argv;

// Code to Parse Input

let command = argv._[0];

// Code To Take Action on Input
if (command === "add"){
    // Call Add Notes Function of Notes Module
    let title = argv.title;
    let body = argv.body;

    notes.add(title,body);
}
else if (command === "del"){
    // Call Delete Notes Function of Notes Module
    let title = argv.title;

    notes.del(title);
}
else if (command === "edit"){
    // Call Edit Notes Function of Notes Module
    let title = argv.title;
    let body = argv.body;

    notes.edit(title,body);
}
else if (command === "show"){
    // Call Show Notes Function of Notes Module
    notes.show();
}
else
    console.log("Invalid Command");


