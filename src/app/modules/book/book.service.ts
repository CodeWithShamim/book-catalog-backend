import { bookSearchableFields } from './book.constant';
import { IBook, IBookFilters } from './book.interface';
import Book from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  const books = await Book.create(payload);
  return books;
};

const getAllBooks = async (
  filters: Partial<IBookFilters>,
): Promise<IBook[]> => {
  // search & filters
  const andConditions = [];
  const { searchTerm, ...filtersData } = filters;

  // search
  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => {
        return {
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        };
      }),
    });
  }

  // filters
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions = andConditions.length ? { $and: andConditions } : {};

  const books = await Book.find(whereConditions)
    .sort({ createdAt: -1 })
    .limit(20)
    .populate('reviews');
  return books;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const book = await Book.findById(id).populate({
    path: 'reviews',
    options: {
      sort: { createdAt: -1 },
      limit: 5,
    },
  });
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
