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
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogAction,
} from '@components/design/alert';
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
      <AlertDialog>
        <Box as="form" css={{ marginBottom: `$md` }} autoComplete="off">
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
          <Box css={{ display: `flex`, flexDirection: `row` }}>
            <AlertDialogTrigger asChild>
              <Button>Update Profile</Button>
            </AlertDialogTrigger>
            <Button
              type="button"
              alternative="secondary"
              css={{ marginLeft: `$sm` }}
              onClick={() => reset()}
            >
              Reset Changes
            </Button>
          </Box>
          <AlertDialogContent>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
            <Box css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <AlertDialogCancel asChild>
                <Button alternative="secondary" css={{ marginRight: 25 }}>
                  Reject
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
                  Accept
                </Button>
              </AlertDialogAction>
            </Box>
          </AlertDialogContent>
        </Box>
      </AlertDialog>
    </>
  );
};
