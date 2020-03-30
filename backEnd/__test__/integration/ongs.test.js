import request from 'supertest';
import faker from 'faker';
import app from '../../src/Server';

const MOCH_ONGS_DEFAULT = {
	name: faker.company.companyName(),
	email: faker.internet.email(),
	city: faker.address.city(),
	whatsapp: faker.phone.phoneNumber(),
	uf: faker.address.stateAbbr(),
};

describe('suite de tests users', () => {
	it('/ong - have to create an ong', async () => {
		const response = await request(app).post('/ongs').send(MOCH_ONGS_DEFAULT);
		expect(response.statusCode).toBe(200);
	});

	it('/ong - have to return an error', async () => {
		delete MOCH_ONGS_DEFAULT.email;
		const response = await request(app).post('/ongs').send(MOCH_ONGS_DEFAULT);
		expect(response.statusCode).toBe(401);
	});

	it('/ong - have to list all ongs', async () => {
		const response = await request(app).get('/ongs');
		console.log(response.body);
		expect(response.statusCode).toBe(200);
	});
});
