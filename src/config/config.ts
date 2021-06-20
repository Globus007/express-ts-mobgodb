import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.PORT || 3000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const DB_CONNECTION = process.env.DB_CONNECTION || '';

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const DB = {
  connection: DB_CONNECTION,
};

export const config = { server: SERVER, db: DB };
