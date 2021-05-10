import express from 'express';

const app = express();

app.get('/test', (req: express.Request, res: express.Response) => {
  res.send('Our API is working!');
});

app.listen(3000, () => {
  console.log('Started API service');
})