import jwt from 'jsonwebtoken';
import Ong from '../models/Ong';

import authConfig from '../../config/auth';

class LoginController {
	static async store(req, res) {
		const { password, email } = req.body;

		const ong = await Ong.findOne({ where: { email } });

		if (!ong) {
			return res.status(401).json({ message: 'Ong not existis' });
		}

		if ((await password) && !(await ong.checkPassword(password))) {
			return res.status(401).json({ message: 'email or password is invalid!' });
		}

		const { id, name } = ong;

		return res.status(200).json({
			id,
			name,
			token: jwt.sign({ id }, authConfig.secret, {
				expiresIn: authConfig.expiresIn,
			}),
		});
	}
}

export default LoginController;
