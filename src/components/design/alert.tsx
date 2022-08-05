import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { styled } from '@config/stitches.config';
import { contentShow, overlayShow } from '@components/design/animation';

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  background: `rgba(253, 252, 253, 0.69)`,
  backdropFilter: `blur(2px)`,
  webkitBackdropFilter: `blur(2px)`,
  position: 'fixed',
  zIndex: `100002`,
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  zIndex: `100003`,
  backgroundColor: `$slate2`,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  border: `2px solid $slate6`,
  padding: `$md`,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

function Content(props: any) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{props.children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: `$slate12`,
  fontSize: `$md`,
  fontWeight: `$bold`,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginY: `$xs`,
  color: `$slate11`,
  fontSize: `$display`,
  lineHeight: 1.5,
});

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
