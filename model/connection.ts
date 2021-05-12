import mongoose from 'mongoose';
import session from 'express-session';
import {default as connectMongoDBSession} from 'connect-mongodb-session';

/**
 * Connect and Save session to mongodb
 */

mongoose.connect(process.env.MONGO_URI as string,
    {
        useNewUrlParser : true,
        useCreateIndex :true,
        useUnifiedTopology:true
    }
).then((result)=>{
    console.log("mongoDB connected");
})

const MongoDBStore = connectMongoDBSession(session); 

export const store = new MongoDBStore({
    uri:process.env.MONGO_URI as string,
    collection:"gabutSessions"
})

