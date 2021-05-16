import {Router} from 'express';
import {UserController} from '../../controllers/_user';


const UserRouter = Router();

UserRouter.post('/register',UserController.createUser);

export default UserRouter;