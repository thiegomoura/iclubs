import app from "../app";
import request from "supertest";
import bcrypt from "bcryptjs";

describe("User", () => {
    it("should be able to create user", async () => {
        const user = {
            email: "user@example.com",
            password: "password"
        };

        const userResponse = await request(app)
            .post('/users')
            .send(user)
            .expect(201);
    })

    it("should be able to auth with valid crendentials", async () => {
        const user = {
            email: "user@example.com",
            password: "password"
        };

        const userResponse = await request(app)
            .post('/users')
            .send(user)
            .expect(201);

        const authResponse = await request(app)
            .post('/users/auth')
            .send(user)
            .expect(201);
    })

    it('should be able to not authenticate with invalid crendentials', async () => {
        const user = {
            email: "user@example.com",
            password: "password"
        };

        const userResponse = await request(app)
            .post('/users')
            .send(user)
            .expect(201);

        const authResponse = await request(app)
            .post('/users/auth')
            .send({
                email: 'invalid email',
                password: 'invalid password',
            })
            .expect(401)
    })
});