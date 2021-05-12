import express,{json} from 'express';
import session from 'express-session';
import config from '../config/config';
import router from '../router/index';
import {store} from '../model/connection';

const path = require('path');

const app = express();
app.set('config',config);
app.set('views', path.join(__dirname, 'view'));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.use(json());
app
    .use(session({
            secret:'key',
            resave: false,
            saveUninitialized: false,
            store:store
        }),);
app.use(router);
    

export default app;