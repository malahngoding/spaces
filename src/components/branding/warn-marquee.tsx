/* 3rd Party Modules Import */
import Marquee from 'react-fast-marquee';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';
import { useWarnMarquee } from '@store/marquee-store';
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Props Declaration
 * @private
 */
interface RunningTextProps {
  children: ReactElement | string;
}
/**
 * Component Declaration
 * @public
 */
export const WarnMarquee = (): JSX.Element => {
  const [hover, setHover] = useState<boolean>(false);
  const t = useTranslations(`Marquee`);
  const shown = useWarnMarquee((state) => state.shown);
  const marqueeToggle = useWarnMarquee((state) => state.toggleMarquee);

  return (
    <Box
      onClick={marqueeToggle}
      css={{
        display: shown ? 'block' : 'none',
        position: `fixed`,
        bottom: 0,
        left: 0,
        height: `32px`,
        width: `100vw`,
        backgroundColor: `$slate11`,
        borderBottom: `1px solid $slate10`,
        zIndex: 999999999,
        fontFamily: `$mono`,
        overflow: `hidden`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Marquee
        speed={30}
        delay={0.5}
        pauseOnHover
        gradientWidth={50}
        gradientColor={[10, 10, 10]}
      >
        {hover ? (
          <Box>
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
/**
 * Internal Component Declaration
 * @private
 */
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
/**
 * Internal Component Declaration
 * @private
 */
