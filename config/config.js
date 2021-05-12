require('dotenv').config();

const config = {
    app:{
        port:process.env.DEV_APP_PORT || 3000,
        //appName: 'tes',
        //env: 'development'
    },
    auth:{
        //jwt_secret : process.env.JWT_SECRET,
        //jwt_expiresIn : process.env.JWT_EXPIRESIN,
        //refresh_token_secret : process.env.REFRES_TOKEN_SECRET,
        //refresh_token_expiresIn : process.env.REFRES_TOKEN_EXPIRESIN
    }
}

export default config