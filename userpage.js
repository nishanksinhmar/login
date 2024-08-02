const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

app.get('/user-page', (req, res) => {
  const userData = require('./user-data.json');
  res.render('user-page', userData);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});