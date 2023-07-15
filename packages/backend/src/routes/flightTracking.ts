import express, { Request, Response } from 'express';
import fs from 'fs';
import { promisify } from 'util';

export const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const readFileAsync = promisify(fs.readFile);
  try {
    const aircraft = await readFileAsync(
      `${process.env.DUMP1090_FA_OUTPUT_DIR}/aircraft.json`,
      { encoding: 'utf8' }
    );
    const aircraftJSON = JSON.parse(aircraft);
    res.status(200).json({ success: true, data: aircraftJSON });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ success: false, message: e.message });
  }
});
