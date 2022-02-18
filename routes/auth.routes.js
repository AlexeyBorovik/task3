const {Router} = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

router.get('/user', async (req, res) => {});

router.post(
    '/register',
    [
        check('email', 'Incorrect E-mail').isEmail(),
        check('password', 'Min 1 symbol').isLength({min: 1})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(), message: 'Incorrect user info'})
        };

        const {name, email, password, dateReg, dateVisit, status, isBlocked, isAuth} = req.body;
        const candidate = await User.findOne({email});

        if(candidate) {
        return res.status(400).json({ message: 'Пользователь с таким E-mail уже есть' });
        };

        const user = new User ({name, email, password, dateReg, dateVisit, status, isBlocked, isAuth});
        await user.save();
        res.status(201).json({ message: 'Пользователь Создан' });
        
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    };
});

router.post(
    '/login',
    [
        check('email', 'Incorrect E-mail').isEmail(),
        check('password', 'Min 1 symbol').isLength({min: 1}).exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(), message: 'Incorrect user info'});
        };

        const {email, password} = req.body;
        const user = await User.findOne({email});
        

        if(!user) {
            res.status(400).json({message: 'Пользователь не найден'});
        }

        const isPassMatch = password === user.password;
        if(!isPassMatch) {
            res.status(400).json({message: 'Неверный пароль'});
        }
        
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h'}
            );

        res.json({ token, userId: user.id });

    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});


module.exports = router;
