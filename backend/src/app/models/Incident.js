import Sequelize, { Model } from 'sequelize';

class Incident extends Model {
	static init(connectiondb) {
		super.init(
			{
				title: Sequelize.STRING,
				description: Sequelize.STRING,
				value: Sequelize.DECIMAL,
				ong_id: Sequelize.INTEGER,
			},
			{
				sequelize: connectiondb,
				tableName: 'incidents',
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ongs' });
	}
}

export default Incident;
