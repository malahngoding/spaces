import { Box } from '@components/design/box';
import { Heading } from '@components/design/typography';
import { BlankLayout } from '@layouts/blank';

export default function Remix() {
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
        <Heading css={{ marginY: `$xs` }}>Remix!</Heading>
      </Box>
    </BlankLayout>
  );
}
