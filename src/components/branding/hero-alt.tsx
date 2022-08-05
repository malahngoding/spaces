/** 3rd Party Modules Import */
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Heading, SubTitle } from '@components/design/typography';
/** Types Import */
import type { ReactElement } from 'react';
/**
 * Main Component Declaration
 *
 */
interface AltHeroProps {
  image: string;
  title: string;
  description: string;
  height?: string;
}

export const AltHero = (props: AltHeroProps): ReactElement => {
  return (
    <AltHeroWrapper height={props.height || `520px`}>
      <AltHeroImage image={props.image} />
      <AltHeroTitle title={props.title} description={props.description} />
    </AltHeroWrapper>
  );
};
/**
 * Internal Component Declaration
 *
 */
interface AltHeroWrapperProps {
  height: string;
  children: ReactElement[];
}
const AltHeroWrapper = (props: AltHeroWrapperProps): ReactElement => {
  return (
    <Box css={{ height: props.height, position: `relative` }}>
      {props.children}
    </Box>
  );
};

interface AltHeroImageProps {
  image: string;
}
const AltHeroImage = (props: AltHeroImageProps) => {
  return (
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
  );
};

interface AltHeroTitleProps {
  description: string;
  title: string;
}
const AltHeroTitle = (props: AltHeroTitleProps): ReactElement => {
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
        {props.description}
      </SubTitle>
      <Heading css={{ color: `#ffffff` }}>{props.title}</Heading>
    </Box>
  );
};
