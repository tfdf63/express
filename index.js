const express = require('express');
const cors = require('cors');
const mydb = require('./config/db');
const app = express();
const rout = require('./routes/router');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(rout);

app.listen(5000, () => {
  console.log('Started ...');
});
