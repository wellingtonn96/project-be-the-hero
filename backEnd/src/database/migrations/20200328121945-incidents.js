module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('incidents', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: null,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			value: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			ong_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'ongs',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
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

	down: (queryInterface) => queryInterface.dropTable('incidents'),
};
