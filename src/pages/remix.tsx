import { Box } from '@components/design/box';
import { BlankLayout } from '@layouts/blank';

export default function Remix() {
  return (
    <BlankLayout title="Remix">
      <Box
        css={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          alignItems: `center`,
          minHeight: `100vh`,
          backgroundColor: `$blue1`,
        }}
      >
        <Box>REMIX!</Box>
      </Box>
    </BlankLayout>
  );
}
