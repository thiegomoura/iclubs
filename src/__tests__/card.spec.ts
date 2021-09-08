import app from "..";
import request from "supertest";
import 'jest-extended';

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

        console.log(cardResponse.body);
        console.log(response.body)

        expect(response.body).toBe(expect.arrayContaining(cardResponse.body));
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
        expect(response.body.created_at).toBeTruthy();
        expect(response.body.updated_at).toBeTruthy();
    });
});