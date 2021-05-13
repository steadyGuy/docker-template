import axios from 'axios';
import express from 'express';
import { PORT, API_URL } from '../config';

import './libs/db';

const app = express();

app.get('/test', (req: express.Request, res: express.Response) => {
  res.send('Our API is working!');
});

app.listen(PORT, () => {
  console.log(`Started service AUTH on port ${PORT}`);
});

app.get("/api/me", (req, res) => {
  res.json({
    id: '1234',
    email: 'as@mail.ru',
  });
});


app.get('/some', (req: express.Request, res: express.Response) => {
  axios.get(`${API_URL}/api/json`).then((response) => {
    res.json(
      response.data
    );
  })
});
