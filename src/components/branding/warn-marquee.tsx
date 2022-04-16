import Marquee from 'react-fast-marquee';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';
import { useWarnMarquee } from '@store/marquee-store';

import type { ReactElement } from 'react';

interface RunningTextProps {
  children: ReactElement | string;
}

const RunningText = (props: RunningTextProps): JSX.Element => {
  return (
    <Paragraph
      css={{
        fontFamily: `$mono`,
        color: `$slate1`,
        userSelect: `none`,
        marginRight: `$xs`,
        '&:hover': { cursor: `default` },
      }}
    >
      {props.children}
    </Paragraph>
  );
};

export const WarnMarquee = (): JSX.Element => {
  const t = useTranslations(`Marquee`);
  const shown = useWarnMarquee((state) => state.shown);

  return (
    <Box
      css={{
        display: shown ? 'block' : 'none',
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
      <Marquee speed={30} delay={0.5} pauseOnHover>
        <RunningText>{t(`warnMarquee`)}</RunningText>
        <RunningText>
          <a
            href="mailto: admin@malahngoding.com"
            target="_blank"
            rel="noreferrer"
          >
            admin@malahngoding.com
          </a>
        </RunningText>
      </Marquee>
    </Box>
  );
};
