import { microService, filamentService } from '@utils/service';

// interface PingServiceMicrosRequest {}

interface PingServiceMicrosResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      empty: boolean;
    };
  };
}

export const pingServiceMicros =
  async (): Promise<PingServiceMicrosResponse> => {
    return await microService.get(``, {});
  };

// interface PingServiceFilamentsRequest {}

interface PingServiceFilamentsResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      empty: boolean;
    };
  };
}

export const pingServiceFilaments =
  async (): Promise<PingServiceFilamentsResponse> => {
    return await filamentService.get(`api`, {});
  };
