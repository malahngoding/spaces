import { credentials } from 'grpc';
import { GreeterClient } from '../../proto/procedure_grpc_pb';

const port = 9000;

export const clientGRPC = new GreeterClient(
  `localhost:${port}`,
  credentials.createInsecure(),
);
