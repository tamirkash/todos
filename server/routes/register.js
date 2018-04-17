const express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    { check, validationResult } = require('express-validator/check'),
    { matchedData } = require('express-validator/filter');

const errorFormatter = ({ location, msg }) => {
    return `${msg}`;
};

router.post('/', [
    check('username')
        .exists()
        .not().isEmpty()
        .withMessage('username is required'),
        // .custom(username => {
        //     return new Promise((resolve) => {
        //         User.getUserByUsername(username, (err, user) => {
        //             resolve(user === null);
        //         })
        //     }).then((userExist) => userExist)
        // }).withMessage('username already in use'),
    check('name')
        .exists()
        .not().isEmpty().withMessage('name is required'),
    check('email')
        .exists()
        .not().isEmpty().withMessage('email is required')
        .isEmail().withMessage('email is not valid'),
        // .custom(email => {
        //     return new Promise((resolve) => {
        //         User.getUserByEmail(email, (err, user) => {
        //             resolve(user === null);
        //         })
        //     }).then((emailExist) => emailExist)
        // }).withMessage('email already in use'),
    check('password')
        .exists()
        .not().isEmpty().withMessage('password is required'),
    check('password2')
        .exists()
        .not().isEmpty().withMessage('password confirmation is required')
        .custom((password2, { req }) => password2 === req.body.password).withMessage('passwords do not match')
], (req, res) => {
    const errors = validationResult(req).formatWith(errorFormatter);

    if(!errors.isEmpty()){
        res.status(400).json({error: errors.array({ onlyFirstError: true })});
    } else {
        const userInput = matchedData(req);
        const newUser = new User({
            name: userInput.name,
            email: userInput.email,
            username: userInput.username,
            password: userInput.password
        });

        User.getUserByUsername(userInput.username, (err, user) => {
            if(user){
                res.status(409).json({error: "username already exist"})
            } else {
                User.getUserByEmail(userInput.email, (err, user) => {
                    if(user) {
                        res.status(409).json({error: "email already exist"})
                    } else {
                        User.createUser(newUser, (err, user) => {
                            if(err){
                                res.status(400).send();
                            } else {
                                res.status(200).send();
                            }
                        });
                    }
                })
            }
        })
    }
});

module.exports = router;