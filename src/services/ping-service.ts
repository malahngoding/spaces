import { filamentService } from '@utils/service';

interface PingFilamentsServiceResponse {
  messages: string;
  payload: { data: null };
  status: string;
}
export const pingFilamentsService =
  async (): Promise<PingFilamentsServiceResponse> => {
    return await filamentService.get(`api`, {}).json();
  };
