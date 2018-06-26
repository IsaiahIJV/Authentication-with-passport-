const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require ('mongoose');
      mongoose.connect ('mongodb://localhost/auth-demo');
const passport = require('passport'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');


app.set('view engine', 'ejs');
app.get('/', (req,res) => {
  res.render('home.ejs')});

app.listen(3001, () => console.log('Example app listening on port 3001!'))
