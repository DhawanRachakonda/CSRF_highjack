const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
const port = 5556;

app.set('view engine','ejs');

app.use(cookieParser());

app.get("/csrf-token", (req, res) => {
  return res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});