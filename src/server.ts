import express from 'express';
import { readRoutes } from './routes/loadRoutes';

const app = express();

app.use(express.json());
readRoutes(app);

app.listen(3333, () => 'server running on port 3333');