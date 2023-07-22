import { IBook } from './book.interface';
import Book from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  const books = await Book.create(payload);
  return books;
};

const getAllBooks = async (): Promise<IBook[]> => {
  const books = await Book.find({});
  return books;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const book = await Book.findById(id);
  return book;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>,
): Promise<IBook | null> => {
  const book = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return book;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const book = await Book.findOneAndDelete({ _id: id });
  return book;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
