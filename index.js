const NotesApi = require('./notesApi')
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const api = new NotesApi()
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  
  console.log(notes)
  model.setNotes(notes);
  view.displayNotes();
});

api.createNote("This is my added note", (notes) => {
  model.setNotes(notes);
  view.displayNotes()
})