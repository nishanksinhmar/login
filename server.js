const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  // Store data in a database or a file
  const userData = { username, password, confirmPassword };
  // ...

  res.redirect('/user-page');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});