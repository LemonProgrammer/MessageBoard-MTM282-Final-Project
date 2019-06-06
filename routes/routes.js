let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/data", { useNewUrlParser: true });

const mdb = mongoose.connection;
mdb.on("error", console.error.bind(console, "connection error:"));
mdb.once("open", function(callback) {});

const profileSchema = mongoose.Schema({
    account_type: String,
    first_name: String,
    last_name: String,
    user_name: String,
    email: String,
    password: String
    // avatar_url: String
});
const messagePostSchema = mongoose.Schema({
    post_id: Number,
    user_id: Number,
    user_name: String,
    date_posted: Date,
    text_content: String
});

const Profile = mongoose.model("Profiles", profileSchema);
const Message = mongoose.model("MessagePosts", messagePostSchema);
////////////////////////////////////////////////////////////////////////////////
exports.index = (req, res) => {
  Profile.find((err,profile) => {
    if(err)
    {
      return console.error(err);
    }
    res.render("home", {
      title: "Home Page",
      profiles: profile
    });

  });
};
exports.viewProfile = (req, res) => {
  let requestID = req.params.id;
  let isIdValid = mongoose.Types.ObjectId.isValid(requestID);
  if(isIdValid)
  {
    Profile.findById(requestID, (err, profile) => {
      if(err)
      {
        return console.error(err);
      }
      res.render("viewProfile", {
        title: `${profile.user_name}'s Page`,
        profile: profile
      });
    });

  }
  else
  {
    
    res.redirect('/')
  }
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

let bycrypt = require('bcrypt-nodejs');
let hashPassword = (passwordStr) => {
  return bycrypt.hashSync(passwordStr);
  // bycrypt.hash(passwordStr, null, null, (err, hash) => {
  //   passHash = hash;
  //   console.log('password hashed');
  //   return passHash;
  // });
};

exports.createNewAccount = (req,res) => {
  let hashedPass = hashPassword(req.body.password);
    let profile = new Profile({
      account_type: 'Admin',
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
      email: req.body.email,
      password: hashedPass
    });
    profile.save((err, profile) => {
      if(err)
      {
        return console.error(err);
      }
      console.log(`${profile.user_name}'s Profile Saved!`);
    });
    res.redirect(`/viewProfile/${profile._id}`);
};

exports.deleteAccount = (req,res) => {
  let requestID = req.params.id;
  Profile.findByIdAndDelete(requestID, (err, profile) => 
  {
    if(err)
    {
      return console.error(err);
    }
    res.redirect('/');
  });
};

exports.verifyLogin = (req,res) => {
  let userName = req.body.user_name;
  let userPassword = req.body.password;
  Profile.findOne({user_name:userName}, (err, profile) => {
    if(err)
    {
      return console.error(err);
    }
    let isMatch = bycrypt.compareSync(userPassword, profile.password);
    if(isMatch)
    {
      console.log(`${userName} has successfully logged in!`);
    }
    else
    {
      console.log("Login info did not match, try again.");
    }
    res.redirect(`/home/:${profile._id}`);
  });
};

exports.editAccount = (req, res) => {
  res.render("editAccount", {
    title: "Editting Account"
  });
};

exports.makeChangesToAccount = (req,res) => {
  let hashedPass = hashPassword(req.body.password);
    let profile = new Profile({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
      email: req.body.email,
      password: hashedPass
    });
    Profile.findOneAndUpdate({},{},(err,doc)=> {
      if(err)
      {
        return console.error(err);
      }
      console.log(`${profile.user_name}'s Profile Updated!`);
    });
    res.redirect(`/viewProfile/${profile._id}`);
};

