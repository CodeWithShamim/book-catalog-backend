import { Schema, model } from 'mongoose';
import { IComment } from './comment.interface';

const commetnSchema = new Schema<IComment>(
  {
    username: {
      type: String,
      required: true,
    },
    rating: Number,
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Comment = model<IComment>('Comment', commetnSchema);
export default Comment;
