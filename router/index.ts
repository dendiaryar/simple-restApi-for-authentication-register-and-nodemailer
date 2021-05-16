import {Router} from 'express';
import {Request,Response} from 'express';
import ApiRouter  from './api/index';
import {AuthController} from '../controllers/_auth'

const router = Router();

router.use('/api/v1',ApiRouter);

//website testing purpose
router.get('/',(req:Request,res:Response)=>{
    return res.render('landing');
})

router.get('/login',(req:Request,res:Response)=>{
    return res.render('login');
});

router.get('/register',(req:Request,res:Response)=>{
    return res.render('register');
})

router.get('/dashboard',(req:Request,res:Response)=>{
    const isAuth = AuthController.isAuth(req,res);
    if(isAuth){
        return res.render('dashboard');
    }
    else {
        return res.end("Unauthorized")
    }
        
    
})

export default router;