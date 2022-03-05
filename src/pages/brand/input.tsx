import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { DesignLayout } from '@layouts/design-layout';
import { Heading, SubTitle, Title } from '@components/design/typography';
import {
  InputGroup,
  InputHelperText,
  InputLabel,
  InputSelect,
  InputText,
  InputTextArea,
} from '@components/design/input';

import type { GetStaticPropsContext } from 'next';

interface HomeProps {
  applicationName: string;
}

export default function DesignInput(props: HomeProps) {
  const { applicationName } = props;
  return (
    <DesignLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">Text Eating Boxes</SubTitle>
          <Heading>Input</Heading>
        </Section>
        <Section>
          <Box>
            <Title>Input Text</Title>
            <InputGroup>
              <InputLabel>Input Label</InputLabel>
              <InputText />
              <InputHelperText>Error Message</InputHelperText>
            </InputGroup>
            <Title>Input TextArea</Title>
            <InputGroup>
              <InputLabel>Input Label</InputLabel>
              <InputTextArea rows={4} />
              <InputHelperText>Error Message</InputHelperText>
            </InputGroup>
            <Title>Input Select</Title>
            <InputGroup>
              <InputLabel>Input Label</InputLabel>
              <InputSelect>
                <option>First Option</option>
                <option>Second Option</option>
                <option>Third Option</option>
              </InputSelect>
              <InputHelperText>Error Message</InputHelperText>
            </InputGroup>
          </Box>
        </Section>
      </Box>
    </DesignLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  const applicationName = `Malah Ngoding`;

  return {
    props: {
      messages,
      applicationName,
    },
  };
}
