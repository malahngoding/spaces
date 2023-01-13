import { userDB } from '$utils/db';
import { v4 as uuid } from '@lukeed/uuid';
import bcrypt from 'bcrypt';

interface RegisterStatus {
	message: string;
	code: 'SUCCESS' | 'ERR_USR';
}
export const createUserWithUsernameAndPassword = async (
	username: string,
	password: string
): Promise<RegisterStatus> => {
	const res = await userDB.fetch({ username: username });
	if (res.count === 0) {
		const hash = await bcrypt.hash(password, 10);
		await userDB.put({ username: username, password: hash, key: uuid() });
		return {
			message: 'Successfuly Registered',
			code: 'SUCCESS'
		};
	} else {
		return {
			message: 'Wrong Input Given',
			code: 'ERR_USR'
		};
	}
};

interface LoginStatus {
	message: string;
	code: 'SUCCESS' | 'ERR_PAS' | 'ERR_USR';
	token: string;
}
export const loginWithUsernameAndPassword = async (
	username: string,
	password: string
): Promise<LoginStatus> => {
	const res = await userDB.fetch({ username: username });
	if (res.count > 0) {
		const hashedPassword = res.items[0].password as string;
		const compare = await bcrypt.compare(password, hashedPassword);
		if (compare === true) {
			return {
				message: 'Successfully Logged In',
				code: 'SUCCESS',
				token: '0x3ae63c4b36c15f6e9abb6a1a2a29b0b050507fff64c8ab998a1cf7b4cc8cdbf0'
			};
		} else {
			return {
				message: 'Wrong input is given',
				code: 'ERR_PAS',
				token: ''
			};
		}
	} else {
		return {
			message: 'Wrong input is given',
			code: 'ERR_USR',
			token: ''
		};
	}
};
