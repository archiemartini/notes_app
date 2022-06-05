    //  fetch('http://localhost:3000/notes')
    //       .then((response) => response.json())
    //            .then((notes) => {console.log(notes)})
class NotesApi {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
         .then((response) => response.json())
              .then(callback);
  }

  async createNote(note, callback) {
    const noteData = { content: note }
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(noteData)
    }
    const response = await fetch('http://localhost:3000/notes', options)
    return response.json()
  }
}

module.exports = NotesApi;