import { micros } from ".";

interface GetHomeRes {
    "messages": string,
    "status": string,
    "payload": {
        "registeredUser": string
    }
}

export const getHome = async (): Promise<GetHomeRes> => {
    const res = await micros.get('/home');
    return res as GetHomeRes;
}