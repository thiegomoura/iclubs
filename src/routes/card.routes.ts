import { Router } from 'express';
import { v4 as uuid, } from 'uuid';

const cardsRouter = Router();

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
    return response.send();
});

cardsRouter.post('/', (request, response) => {

    return response.send();
})

cardsRouter.put('/:id', (request, response) => {
    return response.send();
});
cardsRouter.patch('/:id/done', (request, response) => {
    return response.send();
});
cardsRouter.delete('/:id', (request, response) => {
    return response.send();
});

export default cardsRouter;