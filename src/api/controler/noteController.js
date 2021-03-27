const { validationResult } = require('express-validator');
//Models
const Note = require('../models/notes');
module.exports.addNoteController = async (req, res) => {
  const errors = validationResult(req);
  const note = new Note(req.body);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  try {
    await note.save();
    res.send(note);
  } catch (err) {
    res.status(400).send('someting happening in the server can not save this');
  }
};

module.exports.getNoteController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send(errors.array());
  }
  try {
    const id = req.params.noteId;
    const note = await Note.findById(id);
    if (!note) return res.status(404).send('Not note found');
    res.send(note);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getNotesController = async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (err) {
    res.status(500).send(err);
  }
};
