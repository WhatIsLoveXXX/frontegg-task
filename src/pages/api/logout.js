import cookie from 'cookie';

const TOKEN_KEY_NAME = process.env.TOKEN_KEY_NAME || 'token';

export default (req, res) => {
    res.setHeader(
        'Set-Cookie',
        cookie.serialize(TOKEN_KEY_NAME, '', {
            httpOnly: true,
            maxAge: -1,
            sameSite: 'strict',
            path: '/',
        })
    );
    res.status(200).json({message: 'Logged out successfully'});
};
