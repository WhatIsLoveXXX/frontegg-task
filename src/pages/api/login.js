import {generateToken} from '../../utils/jwt';
import cookie from 'cookie';

const TOKEN_KEY_NAME = process.env.TOKEN_KEY_NAME || 'token';

export default (req, res) => {
    const {username, password} = req.body;

    if (username === 'admin' && password === 'password') {
        const token = generateToken({name: 'Admin'});
        const monthInSeconds = 30 * 24 * 60 * 60;

        res.setHeader('Set-Cookie', cookie.serialize(TOKEN_KEY_NAME, token, {
            httpOnly: true, maxAge: monthInSeconds, sameSite: 'strict', path: '/',
        }));

        res.status(200).json({message: 'Logged in successfully'});
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
};
