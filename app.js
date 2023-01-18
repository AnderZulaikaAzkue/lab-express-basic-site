const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/../public/stylesheets/index.css");
});

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get("/", (req, res, next) => {
  res.render("home")
});

app.get("/about", (req, res, next) => {
  res.render("about")
});

app.get("/works", (req, res, next) => {
  res.render("works")
});

app.get("/pictures", (req, res, next) => {
  res.render("pictures")
});

app.listen(3000, () => console.log('My first app listening for lab express!'));