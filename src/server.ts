import app from './app';
import config from './config';
import dbConnection from './utils/dbConnect';

const port: string | undefined = config.port;

async function main() {
  await dbConnection();

  app.listen(port, () => {
    console.log('Server listening to port', port);
  });
}

main().catch(err => console.log(err));
