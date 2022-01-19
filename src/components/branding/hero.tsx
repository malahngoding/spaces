import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Heading, SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';

interface HeroProps {
  random: number;
}

export const Hero = (props: HeroProps): JSX.Element => {
  const { data: session, status } = useSession();
  const t = useTranslations(`Home`);

  const altImage = [
    `/static/gifs/giphy.gif`,
    `/static/gifs/kusama.gif`,
    `/static/gifs/spacecar.gif`,
  ];

  return (
    <>
      <Box
        css={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${
            altImage[props.random || 0]
          }")`,
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
            height: `380px`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-end`,
            alignItems: `flex-start`,
            padding: `$md`,
            transform: `rotate(180deg)`,
          }}
        >
          <SubTitle
            data-testid="welcome-text"
            css={{ color: `#ffffff`, marginTop: `$md` }}
          >
            {t(`welcome`)}
          </SubTitle>
          <Heading css={{ color: `#ffffff` }}>{t(`title`)}</Heading>
        </Box>
      </Box>
    </>
  );
};
