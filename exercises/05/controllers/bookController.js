import db from '../db.js';

export const getBooks = async (request, response) => {
  const books = await db.getBooks();
  response.json(books);
};

export const getBookById = async (request, response) => {
  const book = await db.getBookById(request.params.id);
  if (!book) {
    return response.status(404).json({ error: 'book not found' });
  }
  response.json(book);
};

export const createBook = async (request, response) => {
  const { title, author } = request.body || {};
  if (!title || !author) {
    return response.status(400).json({ error: 'title or author missing' });
  }
  const book = { id: db.generateId(), title, author };
  const savedBook = await db.addBook(book);
  response.status(201).json(savedBook);
};

export const deleteBook = async (request, response) => {
  const book = await db.getBookById(request.params.id);
  if (!book) {
    return response.status(404).json({ error: 'book not found' });
  }
  await db.deleteBook(request.params.id);
  response.status(204).end();
};
