import "reflect-metadata";
import * as express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';

import './database/connect';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

export default app