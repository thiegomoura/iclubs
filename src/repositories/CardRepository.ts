import { v4 as uuid } from 'uuid';
import Card from "../models/Card";

interface ICreateCardDTO {
    title: string;
    content: string;
}

class CardRepository {
    private cards: Card[] = [];

    constructor() {
        this.cards = [];
    }

    index(): Card[] {
        return this.cards;
    }

    create({ title, content }: ICreateCardDTO): void {
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
    }
}

export default CardRepository;