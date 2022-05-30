class NotesView {

  constructor(modelObject) {
    this.modelObject = modelObject
    this.mainContainerEl = document.querySelector('#main-container')
  }

  displayNotes() {
    notes = this.modelObject.getNotes()

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note; 
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl)
    })
  }
}

module.exports = NotesView;