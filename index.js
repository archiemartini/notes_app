const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const notesModel = new NotesModel;
const notesView = new NotesView(notesModel);

notesView.displayNotes();

console.log('The notes app is running');