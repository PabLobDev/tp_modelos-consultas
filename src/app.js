require('dotenv').config()
var createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');

const dbConnectionTest = require('./utils/dbConnectionTest')
dbConnectionTest();

const methodOverride = require('method-override');

/* manejo de formularios */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* configura métodos PUT y DELETE */
app.use(methodOverride('_method'));

const indexRouter = require('./routes/index');
const actorsRoutes = require('./routes/actorsRoutes');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(actorsRoutes);
app.use(moviesRoutes);
app.use(genresRoutes);


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

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
