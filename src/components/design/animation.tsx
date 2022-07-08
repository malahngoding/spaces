import { keyframes } from '@config/stitches.config';

export const scaleUp = keyframes({
  '0%': { transform: 'translateY(0px)', background: `none` },
  '100%': { transform: 'translateY(-4px)', background: `$slate2` },
});

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const bouncePrimary = keyframes({
  '0%': { boxShadow: `0px 0px` },
  '100%': { boxShadow: `5px 5px` },
});

export const bounceGhostAlternative = keyframes({
  '0%': {
    borderTop: `2px solid $slate1`,
    borderBottom: `2px solid $cyan8`,
  },
  '25%': {
    borderTop: `4px solid $slate1`,
    borderBottom: `4px solid $slate12`,
  },
  '50%': {
    borderTop: `2px solid $slate1`,
    borderBottom: `2px solid $cyan8`,
  },
  '100%': {
    borderTop: `4px solid $slate1`,
    borderBottom: `4px solid $cyan8`,
  },
});

export const bounceStyledLink = keyframes({
  '0%': {
    borderBottom: `2px solid $cyan8`,
  },
  '25%': {
    borderBottom: `2px solid $slate12`,
  },
  '50%': {
    borderBottom: `2px solid $cyan8`,
  },
  '100%': {
    borderBottom: `2px solid $cyan8`,
  },
});

export const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: `translateY(2px)` },
  '100%': { opacity: 1, transform: `translateY(0)` },
});

export const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: `translateX(-2px)` },
  '100%': { opacity: 1, transform: `translateX(0)` },
});

export const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: `translateY(-2px)` },
  '100%': { opacity: 1, transform: `translateY(0)` },
});

export const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: `translateX(2px)` },
  '100%': { opacity: 1, transform: `translateX(0)` },
});
