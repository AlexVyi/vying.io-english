const createError = require('http-errors');
const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const sassMiddleware = require('node-sass-middleware');
const helmet =require('helmet');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

//put the helmet on
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'strict-origin' }));
app.use(function (req, res, next) {
  res.setHeader('X-Powered-By', 'VYING TECHNOLOGIES OU');
  next()
});

/*TELL GOOGLE ON ALL THE REST THAT IS IS NOT DUPLICATE CONTENT*/
/*app.use(function(req, res, next) {
  res.setHeader('X-Link', 'https://vying.io, https://vying.io/dns, https://vying.io/web-development, https://vying.io/faq, https://vying.io/contact, https://vying.io/vyingpedia ; rel="canonical"');
  next();
});*/

app.use(function(req, res, next) {
  res.setHeader('X-PoP', 'location: Johannesburg');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expressHbs({defaultLayout:'layout', extname:'.hbs'}));
app.set('view engine', 'hbs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public'),{maxAge: '12h'}));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules//font-awesome'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
