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
		// cors origin URL - Allow inbound traffic from origin
		corsOptions = {
			origin: ["160.20.183.112"],
			optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
		};

		this.server.app.use(cors(corsOptions));
		this.server.use(json());
	}

	routes() {
		return this.server.use(routes);
	}
}

export default new Server().server;
