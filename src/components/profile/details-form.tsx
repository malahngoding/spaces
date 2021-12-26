import { SubmitHandler, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';

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
import { useEffect } from 'react';

interface DetailFormData {
  name: string;
  avatar: string;
  bio: string;
  email: string;
}

export const DetailsForm = (): JSX.Element => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DetailFormData>({
    defaultValues: {
      name: session?.currentUser.name,
      email: session?.currentUser.email,
      avatar: session?.currentUser.avatar,
      bio: session?.currentUser.bio,
    },
  });

  useEffect(() => {
    let defaults = {
      name: session?.currentUser.name,
      email: session?.currentUser.email,
      avatar: session?.currentUser.avatar,
      bio: session?.currentUser.bio,
    };
    reset(defaults);
  }, [reset, session]);

  const onSubmit: SubmitHandler<DetailFormData> = async (data) => {
    const response = await updateProfileDetails({
      name: data.name,
      avatar: data.avatar,
      bio: data.bio,
      email: data.email,
    });
    reset(response.data.payload);
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
          <InputText {...register(`name`)} />
          {errors.name && <InputHelperText>Help</InputHelperText>}
        </InputGroup>
        <InputGroup>
          <InputLabel>Email</InputLabel>
          <InputText {...register(`email`)} />
          {errors.email && <InputHelperText>Help</InputHelperText>}
        </InputGroup>
        <InputGroup>
          <InputLabel>Avatar</InputLabel>
          <InputText {...register(`avatar`)} />
          {errors.avatar && <InputHelperText>Help</InputHelperText>}
        </InputGroup>
        <InputGroup>
          <InputLabel>Bio</InputLabel>
          <InputTextArea {...register(`bio`)} rows={4} />
          {errors.bio && <InputHelperText>Help</InputHelperText>}
        </InputGroup>
        {isSubmitting ? (
          <Box>Loading...</Box>
        ) : (
          <Box css={{ display: `flex`, flexDirection: `row` }}>
            <Button type="submit">Submit</Button>
            <Button
              type="button"
              alternative="secondary"
              css={{ marginLeft: `$sm` }}
              onClick={() => reset()}
            >
              Reset
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};
