import { Router } from 'express';
import { v4 as uuid, } from 'uuid';
import CardRepository from '../repositories/CardRepository';

const cardsRouter = Router();
const cardsRepository = new CardRepository();

cardsRouter.get('/', (request, response) => {
    const allCards = cardsRepository.index();

    return response.json(allCards);
});

cardsRouter.post('/', (request, response) => {
    const { title, content } = request.body;

    const card = cardsRepository.create({ title, content });

    return response.status(201).json(card);
})

cardsRouter.put('/:id', (request, response) => {
    const { id } = request.params;
    const { title, content } = request.body;

    const card = cardsRepository.edit({ id, title, content });

    return response.status(200).json(card);
});
cardsRouter.patch('/:id/done', (request, response) => {
    const { id } = request.params;

    const card = cardsRepository.setToDone({ id });

    return response.status(200).json(card);
});
cardsRouter.delete('/:id', (request, response) => {
    const { id } = request.params;

    cardsRepository.delete({ id });

    return response.status(204).send();
});

export default cardsRouter;