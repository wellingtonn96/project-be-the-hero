import request from 'supertest';
import app from '../../src/Server';
import Incident from '../../src/app/models/Incident';
import Ong from '../../src/app/models/Ong';

let result = {};
let id_ong = {};
const token = {};

describe('suite of test for incidents', () => {
	beforeAll(async () => {
		const [{ id }] = await Ong.findAll();
		const incidents = await Incident.create({
			title: 'eu suo boo',
			description: 'dfs sdfsdf sfsdf sdfs ',
			value: '10.2',
			ong_id: id,
		});
		result = incidents;
		id_ong = id;
	});

	it('POST /incidents/{id} - create an incident', async () => {
		const results = await request(app).post(`/incidents/${id_ong}`).send({
			title: 'eu suo boo',
			description: 'dfs sdfsdf sfsdf sdfs ',
			value: '10.2',
		});

		expect(results.body.message).toBe('incident created sucessifully');
		expect(results.statusCode).toBe(200);
	});

	it('POST /incidents/{id} - can not create an user with an ong id invalid', async () => {
		const results = await request(app).post('/incidents/2343').send({
			title: 'eu suo boo',
			description: 'dfs sdfsdf sfsdf sdfs ',
			value: '10.2',
		});

		expect(results.body.message).toBe('ong not exists');
		expect(results.statusCode).toBe(401);
	});

	it('GET /incidents/{id} - have to list one user by id', async () => {
		const results = await request(app).get(`/incidents/${result.id}`);
		expect(results.statusCode).toBe(200);
	});

	it('GET /incidents/{id} - can not list one user with id invalid', async () => {
		const results = await request(app).get(`/incidents/4545`);

		expect(results.body.message).toBe('Incident not exists');
		expect(results.statusCode).toBe(401);
	});

	// it('GET /incidents - have to list all incidents', async () => {
	// 	const results = await request(app).get('/incidents');
	// 	expect(results.statusCode).toBe(200);
	// });

	it('DELETE /incidents/:{id} - have to delete an incident', async () => {
		const results = await request(app).delete(`/incidents/${result.id}`);

		expect(results.body.message).toBe('Incident deleted sucessifully');
		expect(results.statusCode).toBe(200);
	});

	it('DELETE /incidents/:{id} - can not delete an user with id invalid', async () => {
		const results = await request(app).delete(`/incidents/45645`);

		expect(results.body.message).toBe('incidents not existis');
		expect(results.statusCode).toBe(401);
	});
});
