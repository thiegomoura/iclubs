import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import bcrycpt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class UserController {
    async create(request: Request, response: Response) {
        const repository = getRepository(User);
        const { email, password } = request.body;

        if (!email || !password)
            return response.status(401).json({ error: 'User need email and password to be created' });

        const checkUserExists = await repository.findOne({ where: { email: email } })

        if (checkUserExists)
            return response.status(409).json({ error: 'User already exists' });

        const newUser = repository.create({
            email,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await repository.save(newUser);

        return response.status(201).json(newUser)
    }

    async auth(request: Request, response: Response) {
        const repository = getRepository(User);
        const { email, password } = request.body;

        const user = await repository.findOne({ where: { email: email } });

        if (!user)
            return response.status(401).json({ error: 'Invalid credentials' });

        const isValidPassword = await bcrycpt.compare(password, user.password);

        if (!isValidPassword)
            return response.status(401).json({ error: 'Invalid crendentials' });

        const secret = process.env.JWT_APP_SECRET;
        const token = jwt.sign({ id: user.id }, secret || 'secret', { expiresIn: '1d' });

        // @ts-expect-error
        delete user.password;

        return response.json({ user, token });
    }
}

export default new UserController();