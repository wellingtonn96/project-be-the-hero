import Incident from '../models/Incident';

class ProfileController {
	static async index(req, res) {
		const { id } = req.params;

		const incident = await Incident.findOne({ where: { id } });

		if (!incident) {
			return res.status(401).json({ message: 'Incident not exists' });
		}

		return res.status(200).json({ data: incident });
	}
}

export default ProfileController;
