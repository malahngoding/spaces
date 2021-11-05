import Image from 'next/image';
import { getCsrfToken, getProviders, signIn } from 'next-auth/react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UilGithub, UilGoogle } from '@iconscout/react-unicons';

import { Button } from '@components/design/button';
import { Form } from '@components/design/form';
import {
  InputText,
  InputGroup,
  InputLabel,
  InputHelperText,
} from '@components/design/input';
import { Paragraph, Title } from '@components/design/typography';
import { AuthLayout } from '@layouts/auth';
import { Span } from '@components/design/span';
import { styled } from '@config/stitches.config';
import { StyledLink } from '@components/design/link';
import { Grid } from '@components/design/grid';

interface RegisterForm {
  email: string;
  password: string;
  repeatPassword: string;
}

const Card = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  margin: `$xs`,
  padding: `$xs`,
  '@sm': {
    margin: `$sm`,
    padding: `$sm`,
  },
});

const Left = styled(`div`, {
  width: `16px`,
  minHeight: `100vh`,
  backgroundColor: `$cyan3`,
  '@sm': {
    width: `32px`,
  },
  '@md': {
    width: `120px`,
  },
  '@lg': {
    width: `380px`,
  },
});

const Right = styled(`div`, {
  width: `calc(100vw - 16px)`,
  minHeight: `100vh`,
  backgroundColor: `$slate2`,
  '@sm': {
    width: `calc(100vw - 32px)`,
  },
  '@md': {
    width: `calc(100vw - 120px)px`,
  },
  '@lg': {
    width: `calc(100vw - 380px)`,
  },
});

export async function getServerSideProps(context: NextPageContext) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: { providers, csrfToken },
  };
}

interface RegisterProps {
  providers: any;
  csrfToken: string;
}

export default function Register(props: RegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const { providers, csrfToken } = props;

  const onSubmit: SubmitHandler<RegisterForm> = (data) =>
    // eslint-disable-next-line no-console
    console.warn(data, props, csrfToken);

  const altImage = `/static/images/camps-instead.webp`;

  return (
    <AuthLayout title="Register">
      <Left
        css={{
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${altImage}")`,
        }}
      />
      <Right>
        <Card>
          <Link href="/" passHref>
            <a>
              <Image
                alt="Malah Ngoding Logo"
                src="/static/favicons/android-chrome-96x96.png"
                height={64}
                width={64}
              />
            </a>
          </Link>
          <Title>Create an account</Title>
          <Paragraph css={{ marginY: `$md`, maxWidth: `315px` }}>
            Gain access to exciting features and learning community. Grow
            together as a platform.
          </Paragraph>
          <Grid
            css={{
              gridTemplateColumns: `1fr 1fr`,
            }}
          >
            <Button
              alternative="secondary"
              onClick={() => signIn(providers.github.id)}
              className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
            >
              <UilGithub />
            </Button>
            <Button
              alternative="secondary"
              onClick={() => signIn(providers.google.id)}
              className="my-2 sm:m-2 flex flex-row justify-center items-center hover:bg-black-100"
            >
              <UilGoogle />
            </Button>
          </Grid>
          <Paragraph css={{ marginY: `$md`, display: `none` }}>
            or using email
          </Paragraph>
          <Form onSubmit={handleSubmit(onSubmit)} css={{ display: `none` }}>
            <InputGroup>
              <InputLabel>E-mail</InputLabel>
              <InputText {...register(`email`, { required: true })} />
              <InputHelperText>
                {errors.email && <span>This is mandatory</span>}
              </InputHelperText>
            </InputGroup>
            <InputGroup>
              <InputLabel>Password</InputLabel>
              <InputText
                {...register(`password`, { required: true })}
                type="password"
              />
              <InputHelperText>
                {errors.password && <span>This is mandatory</span>}
              </InputHelperText>
            </InputGroup>
            <InputGroup>
              <InputLabel>Repeat Password</InputLabel>
              <InputText
                {...register(`repeatPassword`, { required: true })}
                type="password"
              />
              <InputHelperText>
                {errors.repeatPassword && <span>This is mandatory</span>}
              </InputHelperText>
            </InputGroup>
            <Paragraph css={{ marginY: `$md`, maxWidth: `315px` }}>
              Already have an account?{` `}
              <Link href="/auth/signin" passHref>
                <StyledLink>
                  <Span css={{ fontWeight: `bold` }}>Log In</Span>
                </StyledLink>
              </Link>
            </Paragraph>
            <Button type="submit">Register</Button>
          </Form>
        </Card>
      </Right>
    </AuthLayout>
  );
}
