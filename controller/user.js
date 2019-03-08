const github = require('axios').create({
    baseURL: 'https://api.github.com',
    headers: { Authorization: process.env.TOKEN_GITHUB }
});
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.G_CLIENT_ID);
const User = require('../models/user');


class UserController {
    static googleSignIn(req, res) {
        console.log("Masuk controller");
        try {
            let userLoggedIn = '';
            client.verifyIdToken(
                {
                    idToken: req.body.id_token,
                    audience: process.env.G_CLIENT_ID
                })
                .then(function (response) {
                    userLoggedIn = response.payload;
                    console.log("Masuk Serverr");
                    console.log(response);
                    return User.findOne({ email: userLoggedIn.email })
                })
                .then(function (user) {
                    console.log(user);
                    if (user) {
                        return user;
                    }
                    else {
                        return User.create(
                            {
                                name: userLoggedIn.name,
                                email: userLoggedIn.email,
                                password: 'xxxxx',
                                by: 'google'
                            })
                    }
                })
                .then(function (newUser) {
                    console.log(newUser);
                    const payload = {
                        id: newUser.id,
                        name: newUser.name,
                        email: newUser.email
                    }
                    const token = jwt.sign(payload, process.env.JWT_SECRET);
                    console.log("Get Token");
                    console.log(token);
                    res.status(201).json({
                        token,
                        name: newUser.name,
                        email: newUser.email
                    })
                })
        }
        catch (error) {
            res.status(500).json({ message: `Internal Server Error`, error })
        }


    }
}
module.exports = UserController;