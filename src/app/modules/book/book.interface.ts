import { Types } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews?: Types.ObjectId[];
};
