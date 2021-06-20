import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/config';
import { router } from './routes/routes';
import { log } from './logging';
import { connect } from './db/connect';
import { errorHandler } from './middleware/errorhandler';

const port = config.server.port as number;
const host = config.server.hostname;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('short'));
app.use(cors());

app.use('/todos/', router);
app.use(errorHandler);

app.get('*', (req: Request, res: Response) => {
  res.sendStatus(404);
});

app.listen(port, host, () => {
  log.info(`Runing at ${host}:${port}`);

  connect();
});
