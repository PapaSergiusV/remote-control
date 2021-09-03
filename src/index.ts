import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { typesetter, KEYS } from 'typesetter';

import { PressReq } from './types';

typesetter.init();
dotenv.config();

const app = express();
const port = +process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/press', (req, res) => {
  const body = req.body as PressReq;
  typesetter.type(new Int32Array(body.keys.map((keyName) => KEYS[keyName])));
  res.send();
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
})
