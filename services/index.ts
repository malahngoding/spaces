/*
 */
export const services = {};

interface InsteadErrorResponse {
  messages: string;
  payload: { data: any };
  status: string;
  error: unknown;
}
export const generalErrorResponseBuilder = (
  messages: string,
  error: unknown,
): InsteadErrorResponse => {
  return {
    messages: messages,
    payload: { data: null },
    status: `NOT_OK`,
    error: error,
  };
};
