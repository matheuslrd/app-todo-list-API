import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
