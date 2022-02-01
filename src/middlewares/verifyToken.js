// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

class privateRoute {
    static authUser = (req, res, next) => {
        const token = req.header('auth-token');
        if(!token) return res.status(401).send('Access Denied');
    
        try {
            
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified.user;
    
            next();
    
        } catch (error) {
            res.status(400).send('Invalid Token');
        }
    
    }
    
    static authAdmin = (req, res, next) => {
        const token = req.header('admin-token');
        if(!token) return res.status(401).send('Access Denied You Do not have permission to access this Page');
    
        try {
    
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
    
            next();
    
        } catch (error) {
            res.status(400).send('Invalid Token');
        }
    
    }
}


export default privateRoute;