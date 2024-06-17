import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret-key';

export const generateToken = (payload) => {
    const monthInSeconds = 30 * 24 * 60 * 60;
    return jwt.sign(payload, SECRET_KEY, {expiresIn: monthInSeconds});
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};
