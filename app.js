//Require necessary dependancies
const express = require('express');
const app = express();

const mainRoutes = require('./routes');


//static route to serve static files in public folder
app.use('/static', express.static('public'));

//middleware view engine to pug
app.set('view engine', 'pug');

app.use(mainRoutes);

app.use((req, res, next) => {
  console.log('Houston we have a problem')
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error')
});

//event listener set to start server on port 3000
app.listen(3000, () => {
  console.log('This application is running on localhost:3000!')
});
