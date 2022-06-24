const express = require('express');
const axios = require('axios');
const { password } = require('../config.js');
const db = require('../database');

const port = 3002;
const app = express();
const path = require('path');


// MIDDLEWARE
app.use(express.json());
app.use(express.static('public'));


app.get('/get-record', (req, res) => {
  // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.product_id}&count=1000&sort=${req.params.sortMethod}`,
  //   { headers: { Authorization: TOKEN } })
  //   .then((response) => {
  //     res.status(200).send(response.data)
  //   })
  //   .catch((error) => {
  //     // throw new Error(error);
  //     console.error(error);
  //   })
  console.log('getting data!!!')
});

app.put('/add-record', (req, res) => {
  // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${req.params.questionID}qa/questions/:question_id/helpful`,
  // { headers: { Authorization: TOKEN}})
  // .then((response) => {
  //   res.status(200);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  console.log('changing data!!!')
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


