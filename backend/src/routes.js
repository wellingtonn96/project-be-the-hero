import { Router } from 'express';

import OngController from './app/controllers/OngController';
import incidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import LoginController from './app/controllers/LonginController';

import authMiddleware from './app/middlewares/auth';

const route = Router();

route.post('/login', LoginController.store);
route.post('/ongs', OngController.store);

route.use(authMiddleware);

route.get('/ongs', OngController.index);

route.get('/incidents', incidentController.index);
route.post('/incidents/:id', incidentController.store);
route.delete('/incidents/:id', incidentController.delete);
route.get('/incidents/:id', ProfileController.index);

export default route;
