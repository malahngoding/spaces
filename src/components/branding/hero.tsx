import { Heading, SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';

import { useTranslations } from 'next-intl';

export const Hero = (): JSX.Element => {
  const t = useTranslations(`Home`);
  const altImage = `/static/gifs/giphy.gif`;
  return (
    <Box
      css={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${altImage}")`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        position: `relative`,
        filter: `hue-rotate(5deg)`,
        transform: `rotate(180deg)`,
      }}
    >
      <Box
        css={{
          height: `320px`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `flex-start`,
          padding: `$md`,
          transform: `rotate(180deg)`,
        }}
      >
        <SubTitle
          data-testid="welcome-text"
          css={{ color: `#ffffff`, marginTop: `$md` }}
        >
          {t(`welcome`, { username: `Untung So` })}
        </SubTitle>
        <Heading css={{ color: `#ffffff` }}>{t(`title`)}</Heading>
      </Box>
    </Box>
  );
};
