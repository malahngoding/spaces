import { filamentService, microService } from '@utils/service';
import { generalErrorResponseBuilder } from '.';

interface PingServiceResponse {
  messages: string;
  payload: { data: null };
  status: string;
  error?: unknown;
}

export const pingFilamentsService = async (): Promise<PingServiceResponse> => {
  try {
    return await filamentService.get(`ping`, {}).json();
  } catch (error) {
    return generalErrorResponseBuilder(`Ping Failed`, error);
  }
};

export const pingMicrosService = async (): Promise<PingServiceResponse> => {
  try {
    return await microService.get(`ping`, {}).json();
  } catch (error) {
    return generalErrorResponseBuilder(`Ping Failed`, error);
  }
};
