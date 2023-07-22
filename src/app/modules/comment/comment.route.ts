import express, { Router } from 'express';
import { CommentController } from './comment.controller';
const router: Router = express.Router();

router.post('/:bookId', CommentController.createComment);

export const CommentRoutes = router;
