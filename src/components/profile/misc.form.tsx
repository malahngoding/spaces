import {
  InputGroup,
  InputHelperText,
  InputLabel,
  InputText,
} from '@components/design/input';

export const MiscForm = (): JSX.Element => {
  return (
    <>
      <InputGroup>
        <InputLabel>Test Label</InputLabel>
        <InputText />
        <InputHelperText>Help</InputHelperText>
      </InputGroup>
    </>
  );
};
