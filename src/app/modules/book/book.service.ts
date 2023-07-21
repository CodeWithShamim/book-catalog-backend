import Book from './book.model';

const getAllBooks = async () => {
  const books = await Book.find({});
  return books;
};

export const BookService = {
  getAllBooks,
};
