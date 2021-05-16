import { Request, Response } from 'express';
import bycrypt from 'bcryptjs';
import { user, UserModel,UserDocument } from '../model/_user';

export class BaseController {

    static async compare(key1:string,key2:string):Promise<boolean>{
        const isMatch = await bycrypt.compare(key1,key2);
        if(isMatch){
            return true;
        }
        else return false
    } 

    static async findByEmail(email:string):Promise<user|undefined>{
        const user:UserDocument|null = await UserModel.findOne({email},function(err:string,userObj:UserDocument){
            if(err) throw new Error(err);
            else {
                return userObj
            };
        });
        return user?.toObject();
    }
    
}

