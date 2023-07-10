const express = require('express');

//express application
const app = express();

//ejs engine
app.set('view engine', 'ejs');

//request
app.listen(3000);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

//redirect

app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

//404

app.use((req, res) => {
  res.render('404');
});
