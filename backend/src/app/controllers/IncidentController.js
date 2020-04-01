// import * as Yup from 'yup';
import Incident from '../models/Incident';
import Ong from '../models/Ong';

class IncidentController {
	static async index(req, res) {
		const { page = 1 } = req.query;
		const offset = (page - 1) * 5;
		const limit = 5;

		const incident = await Incident.findAndCountAll({
			include: {
				association: 'ongs',
				attributes: ['name', 'email', 'whatsapp', 'city', 'uf'],
			},
			limit,
			offset,
		});

		res.header('X-Total-Count', incident.count);

		return res.status(200).json({ incident });
	}

	static async store(req, res) {
		const { title, description, value } = req.body;
		const { id } = req.params;

		const ong = await Ong.findOne({ where: { id } });

		if (!ong) {
			res.status(401).json({ message: 'ong not exists' });
		}

		const incident = {
			title,
			description,
			value,
			ong_id: id,
		};

		const results = await Incident.create(incident);

		res
			.status(200)
			.json({ data: results, message: 'incident created sucessifully' });
	}

	static async delete(req, res) {
		const { id } = req.params;

		const incident = await Incident.findOne({ where: { id } });

		if (!incident) {
			return res.status(401).json({ message: 'incidents not existis' });
		}

		const data = await incident.destroy();

		return res
			.status(200)
			.json({ data, message: 'Incident deleted sucessifully' });
	}
}

export default IncidentController;
