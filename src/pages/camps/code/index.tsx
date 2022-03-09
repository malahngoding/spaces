import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

import type { GetStaticPropsContext } from 'next';

interface CodeProps {}

export default function Code(props: CodeProps) {
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">Instead Codesandbox</SubTitle>
          <div id="editor" />
        </Section>
        <iframe
          src="https://codesandbox.io/embed/bold-brahmagupta-cdo78b?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: `100%`,
            height: `500px`,
            border: 0,
            borderRadius: `4px`,
            overflow: `hidden`,
          }}
          title="bold-brahmagupta-cdo78b"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
