import {verifyToken} from '../../utils/jwt'
import cookie from 'cookie'

const authMiddleware = (handler) => {
    return async (req, res) => {
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;

        if (token) {
            const decoded = verifyToken(token);
            if (decoded) {
                req.user = decoded;
                return handler(req, res);
            }
        }

        res.status(401).json({message: 'Unauthorized'});
    };
};

export default authMiddleware
