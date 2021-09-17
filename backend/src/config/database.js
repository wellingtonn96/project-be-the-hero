require('dotenv/config');


module.exports = {
	dialect: 'postgres',
	protocol: 'postgres',
	host: process.env.APP_HOST,
	username: process.env.APP_USERNAME,
	password: process.env.APP_PASSWORD,
	database: process.env.APP_DATABASE,
	logging: false,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
		}
	},
	define: {
		timestamps: true,
		underscored: true,
	},
};
