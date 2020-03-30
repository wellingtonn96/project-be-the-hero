import Sequelize from 'sequelize';

import Incident from '../app/models/Incident';
import Ong from '../app/models/Ong';

import dbConfig from '../config/database';

class ConnectionDB {
	constructor() {
		this.model = [Incident, Ong];

		this.init();
	}

	init() {
		const connection = new Sequelize(dbConfig);

		this.model.map((model) => model.init(connection));
	}
}

export default new ConnectionDB();
