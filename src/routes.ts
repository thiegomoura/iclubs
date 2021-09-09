import { Router } from 'express';

import cards from './routes/card.routes';

const routes = Router();

routes.use('/cards', cards);

export default routes;