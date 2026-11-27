import { Router } from 'express';
import { getBooks, getBookById, createBook, deleteBook } from '../controllers/bookController.js';

const bookRouter = Router();

bookRouter.get('/', getBooks);
bookRouter.post('/', createBook);
bookRouter.get('/:id', getBookById);
bookRouter.delete('/:id', deleteBook);

export default bookRouter;
