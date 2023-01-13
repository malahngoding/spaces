import { Deta } from 'deta';

const detaConfig = {
	keyDescription: 'Project Key: gr7x9p',
	projectName: 'gr7x9p',
	projectKey: 'c07g0sga_ED2qA31XX8fbZFMEuYmZGP8xaLnPG6gE'
};

const detaInstances = Deta(detaConfig.projectKey);

export const commentsDB = detaInstances.Base('instead_comments');
export const userDB = detaInstances.Base('instead_users');
