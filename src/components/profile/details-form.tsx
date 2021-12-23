import { SubmitHandler, useForm } from 'react-hook-form';

import {
  InputGroup,
  InputHelperText,
  InputLabel,
  InputText,
} from '@components/design/input';
import { Button } from '@components/design/button';
import { Box } from '@components/design/box';

interface DetailFormData {
  firstName: string;
}

export const DetailsForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DetailFormData>();
  const onSubmit: SubmitHandler<DetailFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        css={{ marginBottom: `$md` }}
      >
        <InputGroup>
          <InputLabel>Test Label</InputLabel>
          <InputText {...register(`firstName`, { required: true })} />
          {errors.firstName && <InputHelperText>Help</InputHelperText>}
        </InputGroup>
        <Box css={{ display: `flex`, flexDirection: `row` }}>
          <Button type="submit">Gas</Button>
          <Button
            type="submit"
            alternative="secondary"
            css={{ marginLeft: `$sm` }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </>
  );
};
