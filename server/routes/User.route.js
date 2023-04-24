import express from 'express';
import UserController from '../controllers/User.controller.js';
import protect from '../middlewares/authMiddleware.js';

const userRouter = express.Router();

userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:email', UserController.getUserByEmail);
userRouter.get('/auth/me', UserController.getMe);
userRouter.get('/search/byemail', UserController.searchUser);
userRouter.post('/add', UserController.createUser);
userRouter.patch('/update/:email', UserController.updateUserByEmail);
userRouter.delete('/delete/:email', UserController.deleteUserByEmail);
userRouter.post('/login', UserController.loginUser);

export default userRouter;
