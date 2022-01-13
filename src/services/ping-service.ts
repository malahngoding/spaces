import { microService, filamentService } from '@utils/service';

export const pingServiceMicros = async (): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      empty: boolean;
    };
  };
}> => {
  return await microService.get(``, {});
};

export const pingServiceFilaments = async (): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      empty: boolean;
    };
  };
}> => {
  return await filamentService.get(`api`, {});
};
