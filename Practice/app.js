const express = require('express');

//express application
const app = express();

//ejs engine
app.set('view engine', 'ejs');

//request
app.listen(3000);

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('blogs/create', { title: 'Create' });
});

//404

app.use((req, res) => {
  res.status(404).render('404');
});
