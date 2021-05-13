import express from 'express';
import { AuthAPIUrl, PORT } from '../config';

import './libs/db';

const app = express();

app.get('/test', (req: express.Request, res: express.Response) => {
  res.json({
    yes: true
  });
});

app.get('/api/json', (req: express.Request, res: express.Response) => {
  res.json({
    yes: true
  });
});

app.listen(PORT, () => {
  console.log(`Started API service on port ${PORT}`);
});