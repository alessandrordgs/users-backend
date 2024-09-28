import { Router } from 'express';
import UsersController from '../Controllers/users.controller';
const usersRouter = Router();
const usersController = new UsersController();
usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id', usersController.getUserById);
usersRouter.post('/', usersController.createUser);
usersRouter.put('/:id', usersController.updateUser);
usersRouter.delete('/:id', usersController.deleteUser);

export default usersRouter;