import {Router} from 'express';
import {Request,Response} from 'express';
import {AuthController} from '../../controllers/_auth';

const AuthRouter = Router();

AuthRouter.post('/login',AuthController.login);
AuthRouter.get('/verify',AuthController.isAuth);

export default AuthRouter;