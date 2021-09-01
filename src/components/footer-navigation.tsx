import { Footer } from '@components/design/footer';
import { Box } from '@components/design/box';
import { Heading } from '@components/design/typography';
import Image from 'next/image';

export const FooterNavigation = () => {
  const FooterItems = [{ title: `string`, url: `url` }];
  return (
    <>
      <Footer>
        {FooterItems.map((item) => (
          <Box key={item.title}>
            <Image
              alt="Malah Ngoding Logo"
              src="/static/favicons/android-chrome-96x96.png"
              height={81}
              width={81}
            />
            <Box>
              <Heading css={{ fontSize: `$lg` }}>Malah</Heading>
              <Heading css={{ fontSize: `$lg` }}>Ngoding</Heading>
            </Box>
          </Box>
        ))}
      </Footer>
    </>
  );
};
