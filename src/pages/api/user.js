import authMiddleware from '../middleware/auth';

const handler = (req, res) => {
    res.status(200).json({user: req.user});
};

export default authMiddleware(handler);
