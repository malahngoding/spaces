import { Box } from '@components/design/box';
import { Heading } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

export default function Space() {
  return (
    <BaseLayout title="Space">
      <Box>
        <br />
        <Heading>Space</Heading>
      </Box>
    </BaseLayout>
  );
}
