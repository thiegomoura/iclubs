import { Router } from 'express';
import { v4 as uuid, } from 'uuid';
import CardRepository from '../repositories/CardRepository';

const cardsRouter = Router();
const cardsRepository = new CardRepository();

interface Card {
    id: string;
    title: string;
    content: string;
    attend: boolean;
    created_at: Date;
    updated_at: Date;
}

const cards: Card[] = [];

cardsRouter.get('/', (request, response) => {
    const allCards = cardsRepository.index();
    
    return response.json(allCards);
});

cardsRouter.post('/', (request, response) => {
    const { title, content } = request.body;

    cardsRepository.create({ title, content });

    return response.status(201).send();
})

cardsRouter.put('/:id', (request, response) => {
    const { id } = request.params;
    const { title, content } = request.body;
    const cardExists = cards.find((card) => card.id === id);

    if (!cardExists)
        return response.status(404).json({ error: 'Card not exists' })

    cardExists.title = title;
    cardExists.content = content;
    cardExists.updated_at = new Date();

    return response.status(200).json(cardExists);
});
cardsRouter.patch('/:id/done', (request, response) => {
    const { id } = request.params;
    const cardExists = cards.find(card => card.id === id);

    if (!cardExists)
        return response.status(404).json({ error: 'Card not exists' })

    cardExists.attend = true;

    return response.status(204).send();
});
cardsRouter.delete('/:id', (request, response) => {
    const { id } = request.params;

    const cardIndex = cards.findIndex(card => card.id === id);

    cards.splice(cardIndex, 1);

    return response.status(204).send();
});

export default cardsRouter;