import { v4 as uuid } from 'uuid';
import Card from "../models/Card";

interface ICreateCardDTO {
    title: string;
    content: string;
}

interface IEditCardDTO {
    id: string;
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

    edit({ id }: IEditCardDTO): void {

    }

    setToDone({ id }: IEditCardDTO): void {

    }

    delete({ id }: IEditCardDTO): void {

    }
}

export default CardRepository;