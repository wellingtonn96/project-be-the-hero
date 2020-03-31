import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Ong extends Model {
	static init(connectiondb) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.VIRTUAL,
				password_hash: Sequelize.STRING,
				whatsapp: Sequelize.STRING,
				city: Sequelize.STRING,
				uf: Sequelize.STRING,
			},
			{
				sequelize: connectiondb,
				tableName: 'ongs',
			}
		);

		this.addHook('beforeSave', async (ong) => {
			if (ong.password) {
				ong.password_hash = await bcrypt.hash(ong.password, 8);
			}
		});

		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password_hash);
	}

	static associate(models) {
		this.hasMany(models.Incident, { foreignKey: 'ong_id', as: 'ongs' });
	}
}

export default Ong;
