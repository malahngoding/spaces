import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { Box } from '@components/design/box';
import { SubTitle } from '@components/design/typography';
import { AuthenticationBlock } from '@components/authentication-block';
import {
  InputGroup,
  InputHelperText,
  InputLabel,
  InputTextArea,
} from '@components/design/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@components/design/button';
import { postComment } from '@services/comment-service';

interface DetailFormData {
  question: string;
}

export const AskDQuestions = (): JSX.Element => {
  const [asked, setAsked] = useState<boolean>(false);
  const t = useTranslations(`Help`);
  const { data: session, status } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DetailFormData>({
    defaultValues: {
      question: ``,
    },
  });

  const onSubmit: SubmitHandler<DetailFormData> = async (data) => {
    try {
      await postComment(data.question, `id`);
      setAsked(true);
    } catch (error) {
      console.error(error);
    }
    reset({ question: `` });
  };

  return (
    <Box css={{ marginY: `$lg` }}>
      <SubTitle>{t(`question`)}</SubTitle>
      <AuthenticationBlock currentSession={session}>
        {isSubmitting ? (
          <></>
        ) : (
          <>
            {asked ? (
              <Box>{t(`thankYou`)}</Box>
            ) : (
              <>
                <InputGroup
                  css={{
                    marginY: `$sm`,
                    width: `100%`,
                    '@md': {
                      width: `70%`,
                    },
                    '@lg': {
                      width: `50%`,
                    },
                  }}
                >
                  <InputLabel>{t(`questionSub`)}</InputLabel>
                  <InputTextArea
                    {...register(`question`, { required: true })}
                    rows={3}
                  />
                  {errors.question && (
                    <InputHelperText>{t(`error`)}</InputHelperText>
                  )}
                </InputGroup>
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
                  {t(`submit`)}
                </Button>
              </>
            )}
          </>
        )}
      </AuthenticationBlock>
    </Box>
  );
};
