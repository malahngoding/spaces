import { filamentService } from '@utils/service';

export const dumpData = async (): Promise<{
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
