import { decays } from ".";

interface GetEchoRes {
    random: number;
}
export const getEcho = async (): Promise<GetEchoRes> => {
    const res = await decays.get('/echo');
    return res as GetEchoRes;
}