import { v4 as uuid } from 'uuid';
import Card from "../models/Card";

interface ICreateCardDTO {
    title: string;
    content: string;
}

interface IEditCardDTO {
    id: string;
    title?: string;
    content?: string;
}

class CardRepository {
    private cards: Card[] = [];

    constructor() {
        this.cards = [];
    }

    index(): Card[] {
        return this.cards;
    }

    create({ title, content }: ICreateCardDTO): Card {
        const card = new Card();

        Object.assign(card, {
            id: uuid(),
            title: title,
            content: content,
            attend: false,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.cards.push(card);

        return card;
    }

    edit({ id, title, content }: IEditCardDTO): Card {
        const cardExists = this.cards.find((card) => card.id === id);

        if (!cardExists)
            throw new Error('Could not find card');

        cardExists.title = title;
        cardExists.content = content;
        cardExists.updated_at = new Date();

        return cardExists;
    }

    setToDone({ id }: IEditCardDTO): Card {
        const cardExists = this.cards.find(card => card.id === id);

        if (!cardExists)
            throw new Error('Card not exists');

        cardExists.attend = true;

        return cardExists;
    }

    delete({ id }: IEditCardDTO): void {
        const cardIndex = this.cards.findIndex(card => card.id === id);

        this.cards.splice(cardIndex, 1);
    }
}

export default CardRepository;