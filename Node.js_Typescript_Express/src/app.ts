import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

const app: Application = express();
dotenv.config();
const { PORT } = process.env;

app.get('/', (req: Request, res: Response) => {
   res.send('Hello');
});

app.listen(PORT, () => console.log('Server running'));
