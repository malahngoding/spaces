import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import {
  slideUpAndFade,
  slideRightAndFade,
  slideDownAndFade,
  slideLeftAndFade,
} from '@components/design/animation';
import { styled } from '@config/stitches.config';

const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 240,
  border: `2px solid $slate12`,
  backgroundColor: `$slate1`,
  boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: `400ms`,
    animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: `transform, opacity`,
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  '&:focus': {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $cyan7`,
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: `$slate1`,
});

const StyledClose = styled(PopoverPrimitive.Close, {
  all: `unset`,
  fontFamily: `inherit`,
  borderRadius: `100%`,
  height: 25,
  width: 25,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  color: `$cyan11`,
  position: `absolute`,
  top: 5,
  right: 5,

  '&:hover': { backgroundColor: `$cyan4` },
  '&:focus': { boxShadow: `0 0 0 2px $cyan7` },
});

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  verticalAlign: `middle`,
  overflow: `hidden`,
  userSelect: `none`,
  width: 45,
  height: 45,
  borderRadius: `100%`,
  backgroundColor: `$cyan12`,
  border: `2px solid $slate12`,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: `100%`,
  height: `100%`,
  objectFit: `cover`,
  borderRadius: `inherit`,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;
