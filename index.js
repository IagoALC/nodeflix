import app from './app.js';
import db from './config/dbConnection.js';
import 'dotenv/config';

const port = process.env.PORT || 3000;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});