import Marquee from 'react-fast-marquee';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';
import { useWarnMarquee } from '@store/marquee-store';

import { ReactElement, useState } from 'react';

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
  const [hover, setHover] = useState<boolean>(false);
  const t = useTranslations(`Marquee`);
  const shown = useWarnMarquee((state) => state.shown);
  const marqueeToggle = useWarnMarquee((state) => state.toggleMarquee);

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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {' '}
      <Marquee speed={30} delay={0.5} pauseOnHover>
        {hover ? (
          <Box onClick={marqueeToggle}>
            <RunningText>
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return <span key={item}>{t(`closeMarquee`)}</span>;
                })}
              </>
            </RunningText>
          </Box>
        ) : (
          <>
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
          </>
        )}
      </Marquee>
    </Box>
  );
};