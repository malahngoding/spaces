import { Hero } from '@components/branding/hero';
import { Box } from '@components/design/box';

import { BaseLayout } from '@layouts/base';

export default function Home() {
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Hero />
      </Box>
    </BaseLayout>
  );
}
