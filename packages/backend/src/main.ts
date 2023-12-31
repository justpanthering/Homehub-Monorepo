import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router as flightTrackerRouter } from './routes/flightTracker';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.use('/flighttracker', flightTrackerRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
