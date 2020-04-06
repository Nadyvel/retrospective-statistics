import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { statistics } from './domain';

(async () => {
  const app = express();
  const port = 8082;
  app.use(bodyParser.json());

  const cors = require('cors');
  app.use(cors());
  app.options('*', cors());
  
  app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

  app.get("/statistics/", (req: Request, res: Response) => {
    res.status(200).send(statistics);
  });

  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
