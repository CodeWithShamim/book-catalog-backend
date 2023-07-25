import { Schema, Types, model } from 'mongoose';
import { IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ref: {
      type: String,
      required: true,
    },
    reviews: {
      type: [Types.ObjectId],
      ref: 'Comment',
    },
  },
  {
    timestamps: true,
  },
);

const Book = model<IBook>('Book', bookSchema);
export default Book;
