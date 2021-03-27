const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // const author = {
  //   name: 'ahmed',
  //   profession: 'web developer',
  // };

  res.send('Welcome to notes app here you can manage Your notes');
});

router.get('*', (req, res) => {
  res.status(404).send('404 not found');
});

module.exports = router;
