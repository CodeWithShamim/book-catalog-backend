import express, { Router } from 'express';
import { BookController } from './book.controller';
const router: Router = express.Router();

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getSingleBook);

router.post('/create-book', BookController.createBook);

router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export const BookRoutes = router;
