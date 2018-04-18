const express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/user');

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.getUserByUsername(username, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false);
            }

            User.comparePassword(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id, (err, user) => {
        done(err, user);
    });
});

router.post('/',
    passport.authenticate('local'),
    (req, res) => {
        res.json({username: req.user.username})
    });

module.exports = router;