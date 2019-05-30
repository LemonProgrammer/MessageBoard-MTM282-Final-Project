let mongoose = require('mongoose');

exports.index = (req,res) => {
    res.render('home', {

    });
};

exports.viewProfile = (req,res) => {

    res.render('viewProfile', {
        title: 'View Profile'
    });
};
exports.changeAvatar = (req,res) => {

    res.render('changeAvatar', {
        title: 'Change Avatar'
    });
};
exports.createAccount = (req,res) => {

    res.render('createAccount', {
        title: 'Create Account'
    });
};
exports.editAccount = (req,res) => {

    res.render('editAccount', {
        title: 'Edit Account'
    });
};