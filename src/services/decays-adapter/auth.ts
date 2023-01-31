import { decays } from '.';

interface PostConnectReq {
    random: number;
}

interface PostConnectRes {
    token: string;
}
export const postConnect = async (req: PostConnectReq): Promise<PostConnectRes> => {
    const res = await decays.get(`/echo/${req}`);
    return res as PostConnectRes;
};
