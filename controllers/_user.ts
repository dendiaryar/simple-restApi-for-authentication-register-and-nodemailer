
import { BaseController } from './basecontroller';
import { Request, Response } from 'express';
import { UserModel } from '../model/_user';
import bycrpt from 'bcryptjs';
import { response_internal_server_error, response_created } from '../utils/_responseutils';


export class UserController extends BaseController {

    static async createUser(req: Request, res: Response):Promise<Response> {
        const { username, email, password } = req.body;

        let user = await UserModel.findOne({ email });

        if (user) {
            return response_internal_server_error(res, "Email Allready Exist")
        }

        const hashedPw = await bycrpt.hash(password, 12);


        user = new UserModel({
            username,
            email,
            password: hashedPw,
            isVerified: 0
        })

        try {
            await user.save();
            return response_created(res, { succes: true, message: "user created" });
        } catch (err) {
            return res.send(err);
        }
    }

}

