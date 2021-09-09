import { Request, Response } from 'express';
import { getRepository } from "typeorm";

import User from '../models/User';

class UserController {
    async create(request: Request, response: Response) {
        const repository = getRepository(User);
        const { email, password } = request.body;

        const checkUserExists = repository.findOne({ where: { email } })

        if (checkUserExists)
            return response.status(409).json({ error: 'User already exists' });

        const user = repository.create({
            email,
            password,
        });
    }

    async auth(request: Request, response: Response) {

    }
}

export default new UserController();