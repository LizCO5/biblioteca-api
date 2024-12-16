const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 80


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/authors', authorsRouter);
app.use('/books', booksRouter);


app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenidos a los libros API',
    endpoints: {
      authors: '/authors',
      books: '/books',
      availableBooks: '/books/available',
      unavailableBooks: '/books/unavailable'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
