import { SubmitHandler, useForm } from 'react-hook-form';

import {
  InputGroup,
  InputHelperText,
  InputLabel,
  InputText,
  InputTextArea,
} from '@components/design/input';
import { Button } from '@components/design/button';
import { Box } from '@components/design/box';
import { updateProfileDetails } from '@services/profile-service';

interface DetailFormData {
  name: string;
  avatar: string;
  bio: string;
}

export const DetailsForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DetailFormData>();
  const onSubmit: SubmitHandler<DetailFormData> = async (data) => {
    const stuff = await updateProfileDetails({
      name: data.name,
      avatar: data.avatar,
      bio: data.bio,
    });
    console.log(stuff.data);
  };

  return (
    <>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        css={{ marginBottom: `$md` }}
        autoComplete="off"
      >
        <InputGroup>
          <InputLabel>Name</InputLabel>
          <InputText {...register(`name`, { required: true })} />
          {errors.name && <InputHelperText>Help</InputHelperText>}
        </InputGroup>
        <InputGroup>
          <InputLabel>Avatar</InputLabel>
          <InputText {...register(`avatar`, { required: true })} />
          {errors.avatar && <InputHelperText>Help</InputHelperText>}
        </InputGroup>
        <InputGroup>
          <InputLabel>Bio</InputLabel>
          <InputTextArea {...register(`bio`, { required: true })} rows={4} />
          {errors.bio && <InputHelperText>Help</InputHelperText>}
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
