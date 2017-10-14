/* Notes Manager Module */

// Loaded Modules
let _ = require('lodash');
let fs = require('fs');

let NotesPrototype = {
    title: "",
    text: ""
};

let Notes = [];

let add = function (title, text) {
    let note = Object.create(NotesPrototype);
    note.text = text;
    note.title = title;

    notesString = fs.readFileSync('notes-data.json');
    Notes = JSON.parse(notesString);

    Notes.push(note);
    let notesTxt = JSON.stringify(Notes);

    // Wrtie The Notes Array to a File
    fs.writeFileSync('notes-data.json',notesTxt);

    console.log("Successfully Added the Note.")
};

let del = function (title) {
    // Load the list of Notes from File onto Notes Array

    let notesString = fs.readFileSync('notes-data.json');
    Notes = JSON.parse(notesString);

    let nBefore = Notes.length;
    _.remove(Notes, function (note) {
        if (note.title === title)
            return true;
        else
            return false;
    });
    let nAfter = Notes.length;

    fs.writeFileSync('notes-data.json',JSON.stringify(Notes));

    if (nBefore === nAfter)
        console.log("The Note does not exist.");
    else
        console.log("The Note has been successfully deleted.")
};

let edit = function (title, text) {
    let notesString = fs.readFileSync('notes-data.json');
    Notes = JSON.parse(notesString);

    let noteIndex =  _.findIndex(Notes,{
        "title":title
    });

    Notes[noteIndex].text = text;

    fs.writeFileSync('notes-data.json',JSON.stringify(Notes));

    console.log("Note has been edited successfully");
};

let show = function() {
    let notesString = fs.readFileSync('notes-data.json');
    Notes = JSON.parse(notesString);

    for (var i=0;i<Notes.length;i++){
        console.log(Notes[i]);
    }
};

module.exports = {
    add:add,
    del:del,
    edit:edit,
    show:show
};