import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken';

interface TokenInfo {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization)
        return response.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();

    try {
        const secret = process.env.JWT_APP_SECRET;
        jwt.verify(token, secret || 'secret');
        return next();
    } catch (err) {
        return response.sendStatus(401);
    }
}