//      fetch('http://localhost:3000/notes')
//           .then((response) => response.json())
//                .then((notes) => {console.log(notes)})
class NotesApi {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes').then((response) => response.json()).then(callback);
  }
}

module.exports = NotesApi;