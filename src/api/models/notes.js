const mongoose = require('mongoose');

const notesScheam = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

// we use timeStamps for......
// createdAt
//updatedAt

const Note = mongoose.model('Note', notesScheam);
module.exports = Note;
