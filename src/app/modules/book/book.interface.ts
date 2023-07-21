type IComment = {
  username: string;
  rating: number;
  comment: string;
};

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews?: IComment[];
};
