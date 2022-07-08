/* 3rd Party Modules Import */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useDebounce } from 'react-use';
import useSWR from 'swr';
/* Internal Modules Import */
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
import { Avatar, AvatarImage } from '@components/navigations/avatar';
import { checkUserName, getCurrentUser } from '@services/user-service';
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Internal Type Declaration
 * @private
 */
interface DetailFormData {
  name: string;
  userName: string;
  avatar: string;
  bio: string;
  email: string;
}
/**
 * Component Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
export const DetailsForm = (): ReactElement => {
  const { data: session } = useSession();
  const t = useTranslations(`ProfileForm`);

  const [defaultUserName, setDefaultUserName] = useState<string>(``);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(``);
  const [val, setVal] = useState<string>(``);
  const [debouncedValue, setDebouncedValue] = useState<string>(``);
  const [avatars] = useState<string[]>([
    session?.currentUser.avatar,
    `Apple-${new Date()}`,
    `Watermelon-${new Date()}`,
    `Orange-${new Date()}`,
    `Pear-${new Date()}`,
    `Cherry-${new Date()}`,
    `Strawberry-${new Date()}`,
    `Nectarine-${new Date()}`,
  ]);

  const {
    setValue,
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DetailFormData>({
    defaultValues: {
      userName: ``,
      name: session?.currentUser.name,
      email: session?.currentUser.email,
      avatar: session?.currentUser.avatar,
      bio: session?.currentUser.bio,
    },
  });

  const handleChooseAvatar = (value: string): void => {
    setValue('avatar', value);
    setSelectedAvatar(value);
  };

  const userData = useSWR('/getCurrentUser', () => getCurrentUser());
  useEffect(() => {
    setDefaultUserName(userData.data?.data.payload.userName || ``);
  }, [userData.data?.data.payload.userName]);

  useEffect(() => {
    let defaults = {
      name: session?.currentUser.name,
      email: session?.currentUser.email,
      userName: defaultUserName,
      avatar: session?.currentUser.avatar,
      bio: session?.currentUser.bio,
    };
    reset(defaults);
  }, [reset, session, defaultUserName]);

  const onSubmit: SubmitHandler<DetailFormData> = async (data) => {
    const response = await updateProfileDetails({
      name: data.name,
      userName: data.userName,
      avatar: data.avatar,
      bio: data.bio,
      email: data.email,
    });
    reset(response.data.payload);
    window.location.reload();
  };

  const [, cancel] = useDebounce(
    () => {
      setDebouncedValue(val);
    },
    1000,
    [val],
  );

  useEffect(() => {
    const isUserNameAvailable = async (value: string): Promise<void> => {
      const response = await checkUserName({ userName: value });
      if (response.data.payload.available) {
        clearErrors(`userName`);
      } else if (defaultUserName === debouncedValue) {
        clearErrors(`userName`);
      } else {
        setError('userName', {
          type: 'custom',
          message: 'error message custom',
        });
      }
    };
    if (debouncedValue !== ``) {
      let theRegEx: RegExp = /[^A-Za-z0-9_.]/;
      if (!theRegEx.test(debouncedValue)) {
        isUserNameAvailable(debouncedValue);
      } else {
        setError('userName', {
          type: 'custom',
          message: 'error message custom',
        });
      }
    }
  }, [debouncedValue, clearErrors, setError, watch, defaultUserName]);

  return (
    <>
      <AlertDialog>
        <Box as="form" css={{ marginBottom: `$md` }} autoComplete="off">
          <InputGroup>
            <InputLabel>{t(`name`)}</InputLabel>
            <InputText {...register(`name`)} />
            {errors.name && <InputHelperText>{t(`error`)}</InputHelperText>}
          </InputGroup>
          <InputGroup>
            <InputLabel>{t(`userName`)}</InputLabel>
            <InputText
              {...register(`userName`)}
              onChange={({ currentTarget }) => {
                setVal(currentTarget.value);
              }}
            />
            {errors.userName && (
              <InputHelperText>{t(`userNameNotAvailable`)}</InputHelperText>
            )}
          </InputGroup>
          <InputGroup>
            <InputLabel>{t(`email`)}</InputLabel>
            <InputText {...register(`email`)} />
            {errors.email && <InputHelperText>{t(`error`)}</InputHelperText>}
          </InputGroup>
          <InputGroup>
            <InputLabel>{t(`avatar`)}</InputLabel>
            <Box
              css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
            >
              {avatars.map((item: string, index) => {
                return (
                  <Avatar
                    key={index}
                    css={{
                      margin: `$xxs`,
                      width: 64,
                      height: 64,
                      border:
                        item === selectedAvatar
                          ? `4px solid $crimson8`
                          : `none`,
                    }}
                  >
                    <AvatarImage
                      src={
                        `https://avatars.dicebear.com/api/miniavs/${item}.svg` ||
                        `https://avatars.dicebear.com/api/miniavs/${new Date()}.svg`
                      }
                      role="button"
                      onClick={() => handleChooseAvatar(item)}
                    />
                  </Avatar>
                );
              })}
            </Box>
            {errors.avatar && <InputHelperText>Help</InputHelperText>}
          </InputGroup>
          <InputGroup css={{ display: `none` }}>
            <InputText {...register(`avatar`)} />
          </InputGroup>
          <InputGroup>
            <InputLabel>{t(`bio`)}</InputLabel>
            <InputTextArea {...register(`bio`)} rows={4} />
            {errors.bio && <InputHelperText>{t(`error`)}</InputHelperText>}
          </InputGroup>
          <Box css={{ display: `flex`, flexDirection: `row` }}>
            <AlertDialogTrigger asChild>
              <Button>{t(`update`)}</Button>
            </AlertDialogTrigger>
            <Button
              type="button"
              alternative="secondary"
              css={{ marginLeft: `$sm` }}
              onClick={() => reset()}
            >
              {t(`reset`)}
            </Button>
          </Box>
          <AlertDialogContent>
            <AlertDialogTitle>{t(`modalTitle`)}</AlertDialogTitle>
            <AlertDialogDescription>
              {t(`modalDescription`)}
            </AlertDialogDescription>
            <Box css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <AlertDialogCancel asChild>
                <Button alternative="secondary" css={{ marginRight: 25 }}>
                  {t(`modalReject`)}
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
                  {t(`modalAccept`)}
                </Button>
              </AlertDialogAction>
            </Box>
          </AlertDialogContent>
        </Box>
      </AlertDialog>
    </>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
