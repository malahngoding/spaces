import { styled } from '@config/stitches.config';

export const Heading = styled(`h1`, {
  fontFamily: `$brand`,
  fontSize: `$xl`,
  fontWeight: 900,
  color: `$slate12`,
  userSelect: `none`,
  marginBottom: `$md`,
});
export const SubHeading = styled(`h2`, {
  fontFamily: `$brand`,
  fontSize: `$xl`,
  fontWeight: 700,
  color: `$slate12`,
  userSelect: `none`,
  marginBottom: `$sm`,
});
export const Title = styled(`h3`, {
  fontFamily: `$brand`,
  fontSize: `$lg`,
  fontWeight: 900,
  color: `$slate12`,
  userSelect: `none`,
  marginBottom: `$md`,
});
export const SubTitle = styled(`h4`, {
  fontFamily: `$brand`,
  fontSize: `$md`,
  fontWeight: 700,
  color: `$slate12`,
  userSelect: `none`,
  marginBottom: `$sm`,
});
export const CaptionTitle = styled(`h5`, {
  fontFamily: `$brand`,
  margin: 0,
  padding: 0,
  fontSize: `$xxs`,
  fontWeight: 300,
  color: `$slate12`,
  userSelect: `none`,
  marginBottom: `$md`,
});
export const Caption = styled(`h6`, {
  fontFamily: `$brand`,
  margin: 0,
  padding: 0,
  fontSize: `$xxs`,
  fontWeight: 300,
  color: `$slate12`,
  userSelect: `none`,
  marginBottom: `$sm`,
});
export const Paragraph = styled(`p`, {
  fontFamily: `$sans`,
  fontSize: `1em`,
  fontWeight: 400,
  color: `$slate12`,
  lineHeight: `1.8em`,
  marginBottom: `$sm`,
});
export const LinkText = styled(Paragraph, {
  fontFamily: `$brand`,
  '&:hover': {
    cursor: `pointer`,
    textDecoration: `underline`,
  },
});
