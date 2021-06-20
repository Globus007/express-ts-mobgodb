import mongoose from 'mongoose';
import { config } from '../config/config';
import { log } from '../logging';

export function connect() {
  const dbUrl = config.db.connection as string;

  return mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      log.info('Database connected');
    })
    .catch((e) => {
      log.error('Database error', e);
      process.exit(1);
    });
}
