/** 3rd Party Modules Import */
import { useTranslations } from 'next-intl';
/** Internal Modules Import */
import { Heading, SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';
/** Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface HeroProps {
  random: number;
}
export const Hero = (props: HeroProps): ReactElement => {
  const t = useTranslations(`Home`);

  const altVideos = [
    `/static/gifs/first.mp4`,
    `/static/gifs/second.mp4`,
    `/static/gifs/third.mp4`,
    `/static/gifs/forth.mp4`,
  ];

  return (
    <HeroWrapper height={`520px`}>
      <HeroVideo random={props.random} urls={altVideos} />
      <HeroTitle subTitle={t(`welcome`)} title={t(`title`)} />
    </HeroWrapper>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface HeroWrapperProps {
  height: string;
  children: ReactElement[];
}
const HeroWrapper = (props: HeroWrapperProps): ReactElement => {
  return (
    <Box css={{ height: props.height, position: `relative` }}>
      {props.children}
    </Box>
  );
};

interface HeroVideoProps {
  random: number;
  urls: string[];
}
const HeroVideo = (props: HeroVideoProps): ReactElement => {
  return (
    <Box
      as="video"
      autoPlay
      muted
      loop
      css={{
        width: `100vw`,
        height: `100%`,
        objectFit: `cover`,
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Box as="source" src={props.urls[props.random]} type="video/mp4" />
    </Box>
  );
};

interface HeroTitleProps {
  title: string;
  subTitle: string;
}
const HeroTitle = (props: HeroTitleProps): ReactElement => {
  return (
    <Box
      css={{
        paddingX: `$md`,
        position: `absolute`,
        bottom: 0,
        left: 0,
        height: `100%`,
        width: `100%`,
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-end`,
        alignItems: `flex-start`,
      }}
    >
      <SubTitle css={{ color: `#ffffff`, marginTop: `$md` }}>
        {props.subTitle}
      </SubTitle>
      <Heading css={{ color: `#ffffff` }}>{props.title}</Heading>
    </Box>
  );
};
