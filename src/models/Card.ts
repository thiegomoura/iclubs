import { v4 as uuid } from 'uuid';
class Card {
    id?: string;
    title?: string;
    content?: string;
    attend?: boolean;
    created_at?: Date;
    updated_at?: Date;
    constructor() {
        if (!this.id)
            this.id = uuid();
    }
}

export default Card;