import { Box } from '@components/design/box';
import { BlankLayout } from '@layouts/blank';
// import { clientGRPC } from '@utils/proto_procedure';
// import { HelloRequest, HelloReply } from '../../proto/procedure_pb';

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

export async function getServerSideProps() {
  // const response = await sayHelloAgain(`Radical`);

  return {
    props: {
      // message: response.getMessage(),
      message: `Hello world!`,
    },
  };
}

interface RemixProps {
  message: string;
}

export default function Remix(props: RemixProps) {
  const { message } = props;
  return (
    <BlankLayout title="Remix">
      <Box
        css={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          minHeight: `100vh`,
          backgroundColor: `$blue1`,
        }}
      >
        <Box>REMIX!</Box>
        <br />
        <p>{message}</p>
      </Box>
    </BlankLayout>
  );
}
