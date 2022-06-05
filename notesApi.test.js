// fetch('http://localhost:3000/notes').then((response) => response.json()).then((notes) => {console.log(notes)})

const NotesApi = require('./notesApi')

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Notes class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NotesApi()
    fetch.mockResponseOnce(JSON.stringify(["This note is coming from the server"]))
    
    api.loadNotes((noteData) => {
      expect(noteData).toStrictEqual(["This note is coming from the server"])
    })
  })
  it('calls a fetch POST request to create a new note', () => {
    const api = new NotesApi()

  })
  
})