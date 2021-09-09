import app from "..";
import request from "supertest";

describe("Card", () => {
    it("should be able to list all cards", async () => {
        const card = {
            title: 'Test title',
            content: 'Test content'
        };

        const cardResponse = await request(app)
            .post('/cards')
            .send(card)
            .expect(201);

        const response = await request(app)
            .get('/cards')
            .expect(200);

        expect(response.body).toEqual(expect.arrayContaining([cardResponse.body]));
    })

    it('should be able to create a new card', async () => {
        const card = {
            title: 'Test title',
            content: 'Test content'
        };

        const response = await request(app)
            .post('/cards')
            .send(card)
            .expect(201);

        expect(response.body).toMatchObject(card);
    });

    it('should be able to edit a card', async () => {
        const card = {
            title: 'Test title',
            content: 'Test content'
        }

        const response = await request(app)
            .post('/cards')
            .send(card)
            .expect(201);

        const id = response.body.id;

        const editedCard = {
            title: 'New title',
            content: 'New content'
        }

        const cardResponse = await request(app)
            .put(`/cards/${id}`)
            .send(editedCard)
            .expect(200);

        expect(cardResponse.body).toEqual(editedCard);
    })

    it('it should be able set to done a card', async () => {
        const card = {
            title: 'Test title',
            content: 'Test content'
        }

        const response = await request(app)
            .post('/cards')
            .send(card)
            .expect(201);

        const id = response.body.id;

        const cardResponse = await request(app)
            .patch(`/cards/${id}/done`)
            .expect(200);

        expect(cardResponse.body.attend).toBe(true);
    })

    it('should be able to delete a car', async () => {
        const card = {
            title: 'Test title',
            content: 'Test content'
        }

        const response = await request(app)
            .post('/cards')
            .send(card)
            .expect(201);

        const id = response.body.id;

        await request(app)
            .delete(`/cards/${id}`)
            .expect(204);
    })
});