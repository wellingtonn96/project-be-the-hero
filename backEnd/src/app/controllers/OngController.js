import * as Yup from 'yup';
import Ong from '../models/Ong';

class OngController {
	static async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			whatsapp: Yup.string().required(),
			city: Yup.string().required(),
			uf: Yup.string().min(2).required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(401).json({ message: 'Validation is failed!' });
		}

		const results = await Ong.create(req.body);
		return res.status(200).json(results);
	}

	static async index(req, res) {
		const results = await Ong.findAll();
		return res.status(200).json(results);
	}
}

export default OngController;
