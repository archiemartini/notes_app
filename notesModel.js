class NotesModel {
  constructor() {
    this.items = []
  }

  getNotes() {
    return this.items
  }

  addNote(item) {
   this.items.push(item) 
  }

  setNotes(notes) {
    this.items = notes
  }

  reset() {
    this.items = []
  }

}

module.exports = NotesModel;