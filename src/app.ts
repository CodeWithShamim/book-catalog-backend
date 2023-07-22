import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './app/routes';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();
dotenv.config();

// using cors
app.use(cors());

// parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Server successfully working...');
});

// routes
app.use('/api/v1', routes);

// global error handler
app.use(globalErrorHandler);

// handle not found route
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Route not found!',
      },
    ],
  });
});

export default app;
