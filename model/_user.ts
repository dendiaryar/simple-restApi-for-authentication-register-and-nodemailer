import mongoose,{mongo, Schema} from 'mongoose';


const userSchema = new Schema({
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

