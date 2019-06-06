const express = require('express'), 
expressSession = require('express-session'),
pug = require('pug'), 
bodyParser = require('body-parser'),
route = require('./routes/routes.js'),
path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

var checkAuthentication = (req, res, next) => 
{
    if(req.session.user && req.session.user.isAuthenticated)
    {
        next();
    }
    else
    {
        res.redirect('/');
    }
}

app.use(expressSession({secret: 'passowrd', saveUninitialized: true, resave: true}));


var urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', route.index);
app.get('/home', route.index);
app.post('/login', urlEncodedParser, route.verifyLogin);
app.get('/home/:id', checkAuthentication, route.index);
app.get('/logout', route.logoutOfAccount);
app.get('/viewProfile/:id', checkAuthentication, route.viewProfile);
app.get('/createAccount', route.createAccount);
app.get('/changeAvatar', checkAuthentication, route.changeAvatar);
app.get('/editAccount/:id', checkAuthentication ,route.editAccount);
app.get('/deleteAccount/:id', checkAuthentication, route.deleteAccount);
app.post('/editAccount/:id', urlEncodedParser, route.makeChangesToAccount);
app.post('/createNewAccount', urlEncodedParser, route.createNewAccount);


app.listen(8000);