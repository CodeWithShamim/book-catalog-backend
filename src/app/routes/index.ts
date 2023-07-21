import express, { Router } from 'express';
import { BookRoutes } from '../modules/book/book.route';
const router: Router = express.Router();

const routeElements = [
  {
    path: '/book',
    route: BookRoutes,
  },
];

routeElements.map(route => router.use(route.path, route.route));

export default router;
