import { styled } from '@config/stitches.config';

export const InputGroup = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,
  marginY: `$xs`,
});

export const InputLabel = styled(`label`, {
  color: `$slate10`,
  fontSize: `$xs`,
  letterSpacing: `2px`,
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
  width: `100%`,
  fontFamily: `$sans`,
  border: `2px solid $cyan9`,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderRadius: 8,
  padding: `10px 15px`,
  fontSize: 16,
  lineHeight: 1,
  outlineOffset: 8,
  margin: `12px 0 8px 0`,
  autoComplete: `off`,
});

export const InputSelect = styled(`select`, {
  '-moz-appearance': `none` /* Firefox */,
  '-webkit-appearance': `none` /* Safari and Chrome */,
  borderRadius: 8,
  border: `2px solid $cyan9`,
  padding: `5px 10px`,
  height: 48,
  fontSize: 16,
  lineHeight: 1,
  outlineOffset: 8,
  margin: `12px 0 8px 0`,
  width: `100%`,
});

export const InputOption = styled(`option`, {});
