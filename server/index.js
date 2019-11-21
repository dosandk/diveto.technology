require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = process.env.PORT;
const DOMAIN = 'subscribe.diveto.technology';
const mailgun = require('mailgun-js')({
  apiKey: process.env.API_KEY,
  domain: DOMAIN
});

const list = mailgun.lists(`mail@${DOMAIN}`);

const saveEmail = address => {
  return list.members().create({ address });
};

app.use(express.static('dist/client'));
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan('dev'));

app.post('/email', async (req, res) => {
  const { email } = req.body;

  console.error('email', email);

  saveEmail(email)
    .then(response => {
      res.status(200).json({ ...response });
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    })
});

app.listen(port, error => {
  if (error) {
    console.error(`Error: ${error}`);
  }

  console.log(`Server listening on port ${port}`);
});




