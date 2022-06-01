const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

model = new NotesModel()
model.addNote('testy test test')
model.addNote('hellooooooooo')

view = new NotesView(model)

view.displayNotes()

console.log('The notes app is running')