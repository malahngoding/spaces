import Marquee from 'react-fast-marquee';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';

export const WarnMarquee = (): JSX.Element => {
  const t = useTranslations(`Marquee`);

  return (
    <Box
      css={{
        position: `fixed`,
        top: 0,
        left: 0,
        height: `32px`,
        width: `100vw`,
        backgroundColor: `$slate12`,
        borderBottom: `1px solid $slate10`,
        zIndex: 999999999,
        fontFamily: `$mono`,
        overflow: `hidden`,
      }}
    >
      <Marquee speed={30} delay={0.5}>
        <Paragraph
          css={{
            marginLeft: `$md`,
            fontFamily: `$mono`,
            color: `$slate1`,
            userSelect: `none`,
            '&:hover': { cursor: `default` },
          }}
        >
          {t(`warnMarquee`)}
        </Paragraph>
      </Marquee>
    </Box>
  );
};
