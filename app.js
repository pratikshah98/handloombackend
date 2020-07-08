var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category_route');
var productRouter = require('./routes/product_route');
var userRouter = require('./routes/user_route');
var billRouter = require('./routes/bill_route');
var productsRouter = require('./routes/products_route');

var forgetpasswordRouter = require('./routes/forgetpassword_route');
var billdetailRouter = require('./routes/billdetail_route');
var productByCatNameRouter = require('./routes/productbycatname_route');
var updateProductRouter = require('./routes/updateproduct_route');

var app = express();
var mongoose=require('mongoose');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',categoryRouter);

app.use('/product',productRouter);

app.use('/products',productsRouter);
app.use('/user',userRouter);
app.use('/bill',billRouter);
app.use('/billdetail',billdetailRouter);
app.use('/probycatname',productByCatNameRouter);
app.use('/updateproduct',updateProductRouter);
app.use('/forgetpassword',forgetpasswordRouter);
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
