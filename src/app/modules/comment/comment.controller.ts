import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { CommentService } from './comment.service';
import { IComment } from './comment.interface';

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const data = req.body;
  const result = await CommentService.createComment(bookId, data);

  sendResponse<IComment>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment created successfully!',
    data: result,
  });
});

export const CommentController = {
  createComment,
};
