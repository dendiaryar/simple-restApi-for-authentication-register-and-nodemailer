import {Router} from 'express';
import {Request,Response} from 'express';
import AuthRouter from './auth';
import RegisterRouter from './register';

 

const ApiRouter = Router();

ApiRouter.use('/verify',AuthRouter);
ApiRouter.use('/register',RegisterRouter);
//router.use('/mailing');
//

//for testing purpose
ApiRouter.get('/tes',(req:Request,res:Response)=>{
    
    console.log("ok");
    return res.end('<h1>Hello, World!</h1>');
})

export default ApiRouter;