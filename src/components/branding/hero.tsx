/* 3rd Party Modules Import */
import { useTranslations } from 'next-intl';
/* Internal Modules Import */
import { Heading, SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';
/* Types Import */
/**
 * Props Declaration
 * @private
 */
interface HeroProps {
  random: number;
}
/**
 * Component Declaration
 * @public
 */
export const Hero = (props: HeroProps): JSX.Element => {
  const t = useTranslations(`Home`);

  const altImage = [
    `/static/gifs/first.mp4`,
    `/static/gifs/second.mp4`,
    `/static/gifs/third.mp4`,
    `/static/gifs/forth.mp4`,
  ];

  return (
    <Box css={{ height: `520px`, position: `relative` }}>
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
        <Box as="source" src={altImage[props.random]} type="video/mp4" />
      </Box>
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
          {t(`welcome`)}
        </SubTitle>
        <Heading css={{ color: `#ffffff` }}>{t(`title`)}</Heading>
      </Box>
    </Box>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
