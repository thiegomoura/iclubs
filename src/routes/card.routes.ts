import { Router } from 'express';

import CardController from '../app/controllers/CardController';
import authMidleware from '../app/middlewares/authMiddleware';

const cardsRouter = Router();

cardsRouter.get('/', CardController.index);
cardsRouter.post('/', CardController.create);
cardsRouter.put('/:id', authMidleware, CardController.edit);
cardsRouter.patch('/:id/done', authMidleware, CardController.setToDone);
cardsRouter.delete('/:id', authMidleware, CardController.delete);

export default cardsRouter;