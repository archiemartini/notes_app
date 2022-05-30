const NotesModel = require('./notesModel')

model = new NotesModel()
model.addNote('Howdy, chrome! LOL')
model.addNote('Testes test test')

view = NotesView(model)
view.displayNotes()

console.log('The notes app is running')