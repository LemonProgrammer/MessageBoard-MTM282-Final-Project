let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/data", { useNewUrlParser: true });

const mdb = mongoose.connection;
mdb.on("error", console.error.bind(console, "connection error:"));
mdb.once("open", function(callback) {});

const accountSchema = mongoose.Schema({
  //What would we added to this schema
    account_id: Int32Array,
    user_id: Int32Array,
    account_type: String
});
const profileSchema = mongoose.Schema({
    user_id: Int32Array,
    first_name: String,
    last_name: String,
    user_name: String,
    avatar_url: String,
    is_active: Boolean
});
const messagePostSchema = mongoose.Schema({
    post_id: Int32Array,
    user_id: Int32Array,
    user_name: String,
    data_posted: Date,
    text_content: String
});

const Account = mongoose.model("Accounts", accountSchema);
const Profile = mongoose.model("Profiles", profileSchema);
const Message = mongoose.model("MessagePosts", messagePostSchema);

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
