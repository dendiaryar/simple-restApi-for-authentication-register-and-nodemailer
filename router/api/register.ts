import {Router} from 'express';
import {RegisterController} from '../../controllers/_register';


const RegisterRouter = Router();

RegisterRouter.post('/',RegisterController);

export default RegisterRouter;