import Sequelize, { Model } from 'sequelize';

class Ong extends Model {
	static init(connectiondb) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				whatsapp: Sequelize.STRING,
				city: Sequelize.STRING,
				uf: Sequelize.STRING,
			},
			{
				sequelize: connectiondb,
				tableName: 'ongs',
			}
		);

		return this;
	}
}

export default Ong;
