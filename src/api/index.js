// const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Router
const notesRoute = require('./routes/notes');
const indexRoute = require('./routes');

// Middleware
app.use(express.json());

// connecting database

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/notes-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('database connect successfully');
  } catch (err) {
    console.log(err);
  }
}

connectDB();

// let notes = [
//   {
//     id: 1,
//     title: 'notes title 1',
//     description: 'notes description',
//   },
//   {
//     id: 2,
//     title: 'notes title 2',
//     description: 'notes description',
//   },
// ];

//handling routes
app.use('/notes', notesRoute);
app.use('/', indexRoute);

// Output with routes naming

// app.get('/hi/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`hi ${name}`);
// });

//server creation
app.listen(3000, () => {
  console.log('server is created and listening on port 3000');
});
