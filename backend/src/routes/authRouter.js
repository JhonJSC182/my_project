import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('Register Endpoint');
});

router.post('/login', (req, res) => {
    res.send('Login Endpoint'); 
});

export default router;