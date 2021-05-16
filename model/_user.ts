import mongoose,{mongo, Schema,Document, Model,Types} from 'mongoose';


export interface user{
    username:string,
    email:string,
    password:string,
    isVerified:Boolean    
}

export interface UserDocument extends user,Document{

};

//for model
export interface UserModel extends Model<UserDocument>{}

export const userSchema = new Schema<UserDocument,UserModel>({
    username:{
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        required:true
    }
});

export const UserModel = mongoose.model('user',userSchema);

