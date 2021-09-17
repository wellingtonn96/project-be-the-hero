import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
	const bearerToken = req.headers.authorization;

	if (!bearerToken) {
		return res.status(401).json({ error: 'Token not provided!' });
	}

	const [, token] = bearerToken.split(' ');

	try {
		const decoded = await promisify(jwt.verify)(token, authConfig.secret);

		req.ongId = decoded.id;

		return next(new NotAuthorizedError());
	} catch (error) {
		return res.status(401).json({ error: 'Token Invalid!' });
	}
};
