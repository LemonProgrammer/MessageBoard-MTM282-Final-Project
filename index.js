const express = require('express'), 
 pug = require('pug'), 
 bodyParser = require('body-parser'),
 route = require('./routes/routes.js'),
 path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
var urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', route.index);
app.get('/viewProfile', route.viewProfile);
app.get('/createAccount', route.createAccount);
app.get('/editAccount', route.editAccount);
app.get('/changeAvatar', route.changeAvatar);




app.listen(8000);