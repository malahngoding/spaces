import { generalErrorResponseBuilder } from '.';
import { microService } from '@utils/service';

interface PingServiceResponse {
  messages: string;
  payload: { data: null };
  status: string;
  error?: unknown;
}

export const pingMicrosService = async (): Promise<PingServiceResponse> => {
  try {
    return await microService.get(`api/ping`, {}).json();
  } catch (error) {
    return generalErrorResponseBuilder(`Ping Failed`, error);
  }
};
