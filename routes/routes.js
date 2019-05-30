const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

exports.home = (req, res) => {
    res.render("home", {
        title: "HomePage"
    });
}

exports.createAccount = (req, res) => {
    res.render("create account", {
        title: "Create Account"
    });
}

exports.editAccount = (req, res) => {
    res.render("edit account", {
        title: "Edit Account"
    });
}

exports.viewProfile = (req, res) => {
    res.render("view profile", {
        title: "View Profile"
    });
}