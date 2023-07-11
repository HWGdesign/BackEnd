const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//! express application

const app = express();

//! connect to mongodb

const dbURI = 'mongodb+srv://randomUser:randomPassword@hwgcluster.aq1dgom.mongodb.net/hwg-blog';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
//ejs engine
app.set('view engine', 'ejs');

//! middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//! routes

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

//! blog routes

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => console.log(err));
});

app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => console.log(err));
});

app.get('/blogs/create', (req, res) => {
  res.render('blogs/create', { title: 'Create' });
});

//! 404 - Error

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
