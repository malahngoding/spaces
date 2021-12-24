import { styled } from '@config/stitches.config';

export const InputGroup = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,
  marginY: `$xs`,
});

export const InputLabel = styled(`label`, {
  color: `$slate10`,
  fontSize: `$xs`,
  fontFamily: `$mono`,
  fontWeight: `bold`,
  padding: 2,
  variants: {
    isDisabled: {
      true: {
        color: `$slate6`,
      },
    },
  },
});

export const InputHelperText = styled(`div`, {
  padding: 2,
  height: 16,
  fontSize: 14,
  color: `$crimson9`,
});

export const FieldSet = styled(`fieldset`, {
  border: `0`,
  padding: 0,
  margin: 0,
  width: `100%`,
});

export const InputText = styled(`input`, {
  width: `100%`,
  fontFamily: `$sans`,
  border: `2px solid $cyan9`,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderRadius: 8,
  padding: `5px 10px`,
  height: 48,
  fontSize: 16,
  lineHeight: 1,
  outlineOffset: 8,
  margin: `12px 0 8px 0`,
  autoComplete: `off`,
});

export const InputTextArea = styled(`textarea`, {
  border: `2px solid $cyan9`,
  borderRadius: 8,
  fontFamily: `$sans`,
  autoComplete: `off`,
  padding: `5px 10px`,
  fontSize: 16,
});

export const InputSelect = styled(`select`, {
  '-moz-appearance': `none` /* Firefox */,
  '-webkit-appearance': `none` /* Safari and Chrome */,
  border: `2px solid $cyan9`,
  padding: `$0`,
  borderRadius: 8,
  backgroundColor: `transparent`,
  width: `100%`,
  '&.custom-select': {
    'background-image': `linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%), linear-gradient(to right, transparent, transparent)`,
    backgroundPosition: `calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 0`,
    backgroundSize: `5px 5px, 5px 5px, 2.5em 2.5em`,
    backgroundRepeat: `no-repeat`,
  },
});

export const InputOption = styled(`option`, {});
