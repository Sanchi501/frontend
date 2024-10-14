const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {


    const token = req.headers['x-auth-token'];
    if(!token) return res.status(403).json({message:'Access Denied'});

    jwt.verify(
        token, 
        process.env.JWT_SECRET,
    (err, payload) => {
        if(err){
            console.log(err);
            return res.status(500).json(err);
             }else{
                req.res = payload;
                next();
             }
    })

}
module.exports = verifyToken;