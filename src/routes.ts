import { Router } from 'express';

import cards from './routes/card.routes';
import users from './routes/user.routes';

const routes = Router();

routes.use('/cards', cards);
routes.use('/user', users);

export default routes;