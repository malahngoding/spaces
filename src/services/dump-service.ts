import { filamentService } from '@utils/service';

// interface DumpDataRequest {}

interface DumpDataResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      empty: boolean;
    };
  };
}

export const dumpData = async (): Promise<DumpDataResponse> => {
  return await filamentService.get(`api`, {});
};
