import { Router } from 'express';

import UserController from '../app/controllers/UserController';

const userRouter = Router();

userRouter.post('/', UserController.create);
userRouter.post('/auth', UserController.auth);

export default userRouter;