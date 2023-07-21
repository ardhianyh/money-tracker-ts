import express, { Express, Request, Response } from "express";
import routes from './routes'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port: number = parseInt(process.env.PORT!) || 3030;
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.all("*", (req: Request, res: Response) => {
   res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

app.listen(port, () => {
   console.log("🚀 Server listen at: http://localhost:" + port);
})