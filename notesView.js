class notesView {
  constructor(notesModel, notesApi) {
    this.model = notesModel
    this.notesApi = notesApi
    this.mainContainerElement = document.querySelector('#main-container')
    
    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
      document.querySelector('#add-note-input').value = ''
    });
  }

  displayNotes() {
    //first removes all previous notes, preventing duplication
    document.querySelectorAll('.note').forEach(element => {
      element.remove()
    })
    //then returns to displaying
    document.query
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteElement = document.createElement('div');
      noteElement.innerText = note;
      noteElement.className = 'note';
      this.mainContainerElement.append(noteElement);

    });
    
  }

  addNewNote(newNote) {
    this.notesApi.createNote(newNote, (notes) => {
      this.model.setNotes(notes)
    })
    this.displayNotes()
    
  }
}



module.exports = notesView;