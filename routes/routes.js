const express = require('express');
const expresSession = require('express-session');
const cookieParser = require('cookie-parser');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

//////////////////////////////////////////////////////////////

var personSchema = mongoose.Schema({
    userName: String,
    age: String,
    password: String,
    email: String,
    userLevel: String,
    avatar: String
  });
  var Person = mongoose.model('User_Collection', personSchema);


app.use(cookieParser());
app.use(expresSession({
    secret: 'This is my secret',
    saveUninitialized: true,
    resave: true
}));

//////////////////////////////////////////////////////

app.get('/', (req, res) => {
    req.session.name = req.session.name || new Date().toUTCString();
    console.log(req.sessionID);
    res.send(req.session.name);
});


///////////////////////////////////////////////////

exports.index = (req, res) => {
    res.render('Home', {

    });
};

exports.changeAvatar = (req, res) => {
    res.render('Home', {

    });
};

exports.createAccount = (req, res) => {
    res.render('Home', {

    });
};

exports.editAccount = (req, res) => {
    res.render('Home', {

    });
};

exports.viewProfile = (req, res) => {
    res.render('Home', {

    });
};

exports.updateUser = (req, res) => {
    var user = new user({
        userName: req.body.userName,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        avatar: req.body.avatar
    });

    res.redirect('/view');
}