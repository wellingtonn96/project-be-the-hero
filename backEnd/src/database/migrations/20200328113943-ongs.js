module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('ongs', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			whatsapp: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			uf: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					max: 2,
				},
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: (queryInterface) => {
		return queryInterface.dropTable('ongs');
	},
};
