const express = require('express'), 
pug = require('pug'), 
bodyParser = require('body-parser'),
route = require('./routes/routes.js'),
path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

var urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', route.index);
app.get('/home', route.index);
app.get('/home/:id', route.index);
app.get('/viewProfile/:id', route.viewProfile);
app.get('/createAccount', route.createAccount);
app.get('/changeAvatar', route.changeAvatar);
app.get('/editAccount/:id', route.editAccount);
app.get('/deleteAccount/:id', route.deleteAccount);
app.post('/editAccount/:id', urlEncodedParser, route.makeChangesToAccount);
app.post('/createAccount', urlEncodedParser, route.createNewAccount);
app.post('/home', urlEncodedParser, route.verifyLogin);



app.listen(8000);