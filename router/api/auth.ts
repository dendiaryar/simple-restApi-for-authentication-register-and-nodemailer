import {Router} from 'express';
import {Request,Response} from 'express';
import {AuthController} from '../../controllers/_auth';

const AuthRouter = Router();

AuthRouter.post('/login',AuthController.login);
AuthRouter.post('/verify',AuthController.isAuth);
AuthRouter.post('/logout',AuthController.logout_post);

export default AuthRouter;