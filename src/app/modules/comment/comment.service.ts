import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import Book from '../book/book.model';
import { IComment } from './comment.interface';
import Comment from './comment.model';

const createComment = async (
  bookId: string,
  payload: IComment,
): Promise<IComment> => {
  const book = await Book.findById(bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found.');
  }

  const comment = await Comment.create(payload);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to create comment.');
  }

  book.reviews?.push(comment._id);
  await book.save();

  return comment;
};

export const CommentService = {
  createComment,
};
