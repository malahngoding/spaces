import * as SwitchPrimitive from '@radix-ui/react-switch';

import { styled } from '@config/stitches.config';
import { Box } from '@components/design/box';
import { Paragraph } from '@components/design/typography';
import { useCookiesPersist } from '@store/cookies-store';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: `$cyan5`,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $cyan9`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px $cyan9` },
  '&[data-state="checked"]': { backgroundColor: '$cyan9' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $cyan9`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export const Cookie = () => {
  const cookies = useCookiesPersist((state) => state.cookies);
  const toggleCookies = useCookiesPersist((state) => state.toggleCookies);
  return (
    <Box css={{ display: `flex`, flexDirection: `row` }}>
      <StyledSwitch checked={cookies}>
        <StyledThumb onClick={() => toggleCookies()} />
      </StyledSwitch>
      <Paragraph css={{ marginLeft: `$md` }}>3rd party cookies usage</Paragraph>
    </Box>
  );
};
