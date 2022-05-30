/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./notesView')

describe('The NotesView class', () => {

  const mockedModel = {
    getNotes: () => ["One, two - testing", "Testes"]
  }

  it('initializes with an injected model class-object', () => {
    notes = new NotesView(mockedModel)
  })

  it('displays the notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new NotesView(mockedModel)

    view.displayNotes()
    expect(document.querySelectorAll('div-note').length).toBe(2)
  })
})