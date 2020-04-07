import * as Yup from 'yup';
import Ong from '../models/Ong';

class OngController {
	static async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			password: Yup.string().required(),
			whatsapp: Yup.string().required(),
			city: Yup.string().required(),
			uf: Yup.string().min(2).required(),
		});

		const { email } = req.body;

		const ong = await Ong.findOne({ where: { email } });

		if (ong) {
			return res.status(401).json({ message: 'User already exists' });
		}

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
