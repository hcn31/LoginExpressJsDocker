const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

 
  if (username === 'admin' && password === 'admin') {
    res.send('Logged in successfully');
  } else {
    res.send('Incorrect username or password');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
