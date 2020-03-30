import { Router } from 'express';

import OngController from './app/controllers/OngController';

const route = Router();

route.post('/ongs', OngController.store);

route.get('/ongs', OngController.index);

export default route;
