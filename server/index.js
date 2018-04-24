const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/api/photo/:id', (req, res) => {
  db.getById(req.params.id, (error, results) => {
    if (error) {
      console.log('error from app.get');
    } else {
      res.json(results);
    }
  });
}); 
app.listen(5000, () => console.log("I am listening to Dylan's Channel: localhost:5000"));