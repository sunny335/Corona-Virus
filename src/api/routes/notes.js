const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
//controller
const {
  addNoteController,
  getNoteController,
  getNotesController,
} = require('../controler/noteController');

// getting notes data

router.get('/', getNotesController);

// getting notes data by id
router.get(
  '/:noteId',
  check('noteId', 'Note not found').isMongoId(),
  getNoteController
);

// Adding notes
router.post('/notes', [
  check('title')
    .notEmpty()
    .withMessage('title is required')
    .isLength({ min: 3, max: 10 })
    .withMessage('title is r Must 3 to 10 character'),
  check('description')
    .notEmpty()
    .withMessage('description is required')
    .isLength({ min: 3, max: 10 })
    .withMessage('description is   Must 3 to 10'),
  addNoteController,
]);

// update note
router.put(
  '/:noteId',
  [
    check('noteId', 'Not Found').isMongoId(),
    check('title')
      .optional()
      .notEmpty()
      .withMessage('title is required')
      .isLength({ min: 3, max: 10 })
      .withMessage('title is r Must 3 to 10 character'),
    check('description')
      .optional()
      .notEmpty()
      .withMessage('description is required')
      .isLength({ min: 3, max: 10 })
      .withMessage('description is   Must 3 to 10'),
  ],
  async (req, res) => {
    const id = req.params.noteId;
    const gotNoteInput = Object.keys(req.body);
    const allowUpdate = ['title', 'description'];
    const isAllowed = gotNoteInput.every((update) =>
      allowUpdate.includes(update)
    );
    if (!isAllowed) return res.status(400).send('invalid updates');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    try {
      const note = await Note.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!note) return res.status(404).send('Note Not Found');
      res.send(note);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// delete note
router.delete(
  '/:noteId',
  check('noteId', 'note not found').isMongoId(),
  async (req, res) => {
    const id = req.params.noteId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(404).send(errors.array());
    try {
      const note = await Note.findByIdAndDelete(id);
      if (!note) return res.status(404).send('note not found');
      res.send(note);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

module.exports = router;
