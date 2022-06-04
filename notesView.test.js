/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')


describe('Notes View', () => {

  const mockModel = {
    getNotes: () => ["1", "2"]
  }
  it('Shows a list of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    //mocking the page
    const notesView = new NotesView(mockModel);
    notesView.displayNotes();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
  
    // 1. Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';
  
    // 2. Click the button
    const button = document.querySelector('#add-note-button');
    button.click();
  
    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  });
  it('does not display same notes when DisplayNotes it is called twice', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    model.addNote('Testy test')
    const view = new NotesView(model);

    view.displayNotes()
    view.displayNotes()

    expect(document.querySelectorAll('div.note').length).toEqual(1)
  })
});