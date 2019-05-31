let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/data");

const mdb = mongoose.connection;
mdb.on("error", console.error.bind(console, "connection error:"));
mdb.once("open", function(callback) {});

const personSchema = mongoose.Schema({
  //What would we added to this schema
});

const Person = mongoose.model("People_Collection", personSchema);

exports.index = (req, res) => {
  res.render("home", {});
};

exports.viewProfile = (req, res) => {
  res.render("viewProfile", {
    title: "View Profile"
  });
};
exports.changeAvatar = (req, res) => {
  res.render("changeAvatar", {
    title: "Change Avatar"
  });
};
exports.createAccount = (req, res) => {
  res.render("createAccount", {
    title: "Create Account"
  });
};
exports.editAccount = (req, res) => {
  res.render("editAccount", {
    title: "Edit Account"
  });
};
