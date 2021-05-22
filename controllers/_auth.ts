import {Request,Response} from 'express';
import {user, UserModel} from '../model/_user';
import { BaseController } from './basecontroller';
import {response_success,response_bad_request,response_unauthorized} from '../utils/_responseutils';


export class AuthController extends BaseController {
    static async login(req:Request,res:Response):Promise<Response> {
        
        const {email,password} = req.body;
        const user:user|undefined = await super.findByEmail(email);

        if(!user){
            return response_bad_request(res,"Login Failed");
        }
        const isMatch = await super.compare(password,user.password);
        
        if(isMatch){
            req.session.isAuth = true
            req.session.user = user.username
            return response_success(res,{success:true},"Found user on database");
        }else{
            return response_bad_request(res,"Wrong Password");
        }
    }

    static isAuth(req:Request,res:Response){
        if(req.session.isAuth){
            return response_success(res,"Authorized Request");
        }else{
            return response_unauthorized(res,"Unauthorized Request");
        }
    }
    static logout_post(req:Request, res:Response){
        req.session.destroy((err) => {
          if (err) throw err;
          res.redirect("/login");
        });
      };
    
}