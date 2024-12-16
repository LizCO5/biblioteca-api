const express = require('express');
const router = express.Router();
const books = require('../data/books');


router.get('/', (req, res) => {
  res.json(books);
});


router.get('/available', (req, res) => {
  const availableBooks = books.filter(book => book.available);
  res.json(availableBooks);
});


router.get('/unavailable', (req, res) => {
  const unavailableBooks = books.filter(book => !book.available);
  res.json(unavailableBooks);
});


router.post('/', (req, res) => {
  const { title, authorId, year, available } = req.body;
  
  if (!title || !authorId || !year) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    authorId,
    year,
    available: available ?? true
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

module.exports = router;
