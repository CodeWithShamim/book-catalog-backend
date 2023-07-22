import express, { Router } from 'express';
import { BookRoutes } from '../modules/book/book.route';
import { CommentRoutes } from '../modules/comment/comment.route';
const router: Router = express.Router();

const routeElements = [
  {
    path: '/book',
    route: BookRoutes,
  },
  {
    path: '/comment',
    route: CommentRoutes,
  },
];

routeElements.map(route => router.use(route.path, route.route));

export default router;
