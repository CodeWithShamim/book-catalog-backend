import express, { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
const router: Router = express.Router();

const routeElements = [
  {
    path: '/user',
    route: UserRoutes,
  },
];

routeElements.map(route => router.use(route.path, route.route));

export default router;
