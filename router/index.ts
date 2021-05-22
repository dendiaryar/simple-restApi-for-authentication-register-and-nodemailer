import {Router} from 'express';
import type {Request,Response} from 'express';
import ApiRouter  from './api/index';

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
  return res.render('dashboard')
})

export default router;