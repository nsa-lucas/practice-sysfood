import express from 'express';
import { menuRoutes } from './routes/menu.routes';

const app = express();

app.use(express.json());

app.use('/menu', menuRoutes);

app.listen(3335, () => console.log('Server is running'));
