import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Card from '../models/Card';

class CardController {
    async index(request: Request, response: Response) {
        const repository = getRepository(Card);
        const cards = await repository.find();
        return response.json(cards);
    }

    async create(request: Request, response: Response) {
        const { title, content } = request.body;
        const repository = getRepository(Card);

        const newCard = {
            title: title,
            content: content,
            attend: false,
            created_at: new Date(),
            updated_at: new Date(),
        }
        const card = await repository.create(newCard);

        await repository.save(card);
        return response.json(card);
    }

    async edit(request: Request, response: Response) {
        const { id } = request.params;
        const { title, content } = request.body;
        const repository = getRepository(Card);
        const cardExists = await repository.findOne(id);

        if (!cardExists)
            return response.status(404).json({ error: 'Could not find card' });

        cardExists.title = title;
        cardExists.content = content;

        await repository.save(cardExists);
        return response.json(cardExists);
    }

    async setToDone(request: Request, response: Response) {
        const repository = getRepository(Card);
        const { id } = request.params;
        const cardExists = await repository.findOne(id);

        if (!cardExists)
            return response.status(404).json({ error: 'Could not find card' });

        cardExists.attend = true;

        await repository.save(cardExists);
        return response.status(200).json(cardExists);
    }

    async delete(request: Request, response: Response) {
        const repository = getRepository(Card);
        const { id } = request.params;

        const cardExists = await repository.findOne(id);

        if (!cardExists)
            return response.status(404).json({ error: 'Could not find card' });

        await repository.remove(cardExists);
        return response.sendStatus(204);
    }
}

export default new CardController();