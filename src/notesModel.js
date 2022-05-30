class NotesModel {

  constructor() {
    this.notes = []
  }

  addNote(string) {
    this.notes.push(string)
  }

  getNotes() {
    return this.notes
  }

  reset() {
    this.notes = []
  }
}

module.exports = NotesModel;