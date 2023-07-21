import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import { IBook } from './book.interface';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookService } from './book.service';

export const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();

  sendResponse<IBook[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully!',
    data: result,
  });
});

export const BookController = {
  getAllBooks,
};
