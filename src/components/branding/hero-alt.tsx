/* 3rd Party Modules Import */
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { Heading, SubTitle } from '@components/design/typography';
/* Types Import */
/**
 * Props Declaration
 * @private
 */
interface AltHeroProps {
  image: string;
  title: string;
  description: string;
  height?: string;
}
/**
 * Component Declaration
 * @public
 */
export const AltHero = (props: AltHeroProps): JSX.Element => {
  return (
    <Box css={{ height: props.height || `520px`, position: `relative` }}>
      <Box
        as="img"
        css={{
          width: `100vw`,
          height: `100%`,
          objectFit: `cover`,
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        src={props.image}
      />
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
          {props.description}
        </SubTitle>
        <Heading css={{ color: `#ffffff` }}>{props.title}</Heading>
      </Box>
    </Box>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
