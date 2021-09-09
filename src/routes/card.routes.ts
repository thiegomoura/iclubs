import { Router } from 'express';

import CardController from '../app/controllers/CardController';

const cardsRouter = Router();

cardsRouter.get('/', CardController.index);
cardsRouter.post('/', CardController.create);
cardsRouter.put('/:id', CardController.edit);
cardsRouter.patch('/:id/done', CardController.setToDone);
cardsRouter.delete('/:id', CardController.delete);

export default cardsRouter;