import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', async (_req: Request, res: Response) => {
  try {
    res.status(200).send('Hello World!');
  } catch (error) {
    res.status(500).send('Vish!! Deu ruim');
  }
});

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => console.log(`Ouvindo na porta ${PORT}!`));
