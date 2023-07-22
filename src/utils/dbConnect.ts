import mongoose from 'mongoose';
import config from '../config';

const dbURL: string | undefined = config.database_url;

const dbConnection = async () => {
  if (!dbURL) {
    console.log('DB url not found.');
    return;
  }
  await mongoose.connect(dbURL);
  console.log('Successfully databse connected.');
};

export default dbConnection;
