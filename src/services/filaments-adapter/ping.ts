import { filaments } from '.';

interface GetPingRes {
	messages: string;
	payload: {
		data: null;
	};
	status: string;
}

export const getPing = async (): Promise<GetPingRes> => {
	const res = await filaments.get('/ping');
	return res as GetPingRes;
};
