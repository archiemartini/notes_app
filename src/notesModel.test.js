const NotesModel = require('./notesModel')

describe('NotesModel', () => {

  let model;

  beforeEach(function () {
    model = new NotesModel()
  });

    it('should be able to receive a note', () => {
      model.addNote('Howdy doody!')
    })

    it('should return an array of notes when requested', () => {
      model.addNote('Test Note')
      expect(model.getNotes()).toEqual(['Test Note'])
    })

    it('should be able to reset it\'s note contents', () => {
      model.addNote('Bye bye')
      model.reset()
      expect(model.getNotes()).toEqual([])

    })
})