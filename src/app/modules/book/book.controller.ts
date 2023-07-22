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

export const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book retrieved successfully!',
    data: result,
  });
});

export const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await BookService.updateBook(id, updatedData);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book updated successfully!',
    data: result,
  });
});

export const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.deleteBook(id);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book deleted successfully!',
    data: result,
  });
});

export const BookController = {
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
