// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import { clientGRPC } from '@utils/proto_procedure';
// import { HelloRequest, HelloReply } from '../../../proto/procedure_pb';

type Data = {
  name: string;
};

// function sayHelloAgain(name: string) {
//   return new Promise<HelloReply>((resolve, reject) => {
//     const request = new HelloRequest();
//     request.setName(name);

//     clientGRPC.sayHelloAgain(request, (err, response) => {
//       if (err) reject(err);
//       else resolve(response);
//     });
//   });
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // const response = await sayHelloAgain(`Radical`);
  res.status(200).json({ name: `Alberto` });
  // .json({ name: `${response.getMessage()}John Doe ${req.query.id}` });
}
