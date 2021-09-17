import express, { json } from 'express';
import cors from 'cors';

import './database/ConnectionDB';

import routes from './routes';

class Server {
	constructor() {
		this.server = express();

		this.middlewares();
		this.routes();
		this.upServer();
	}

	upServer() {
		return this.server.listen(process.env.PORT || 3333);
	}

	middlewares() {
		this.server.use(cors());
		this.server.use(json());
	}

	routes() {
		return this.server.use(routes);
	}
}

export default new Server().server;
