var express = require('express'),
  pug = require('pug'),
  path = require('path'),
  route = require('./routes/routes.js'),
  bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
var urlencodedParser = bodyParser.urlencoded({
  extended: true
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

////////////////////////////////////////

app.get('/', route.index);
app.get('/NewAvatar', route.changeAvatar);
app.post('/create', urlencodedParser, route.updateUser);
app.get('/RegisterAccount', route.createAccount);
app.post('/create', urlencodedParser, route.updateUser);
app.get('/editAccount', route.editAccount);
app.post('/create', urlencodedParser, route.updateUser);
app.get('/view', route.viewProfile);


app.listen(3000);