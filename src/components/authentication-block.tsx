/* 3rd Party Modules Import */

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
/* Internal Modules Import */
import { Section } from '@components/design/section';
import { Paragraph } from '@components/design/typography';
import { Button } from '@components/design/button';
import { Box } from '@components/design/box';
/* Types Import */
/**
 * Component Props Declaration
 * @private
 */
interface AuthenticationBlockProps {
  currentSession: any;
  children: any;
}
/**
 * Component Declaration
 * @public
 */
export const AuthenticationBlock = (props: AuthenticationBlockProps) => {
  const router = useRouter();
  const t = useTranslations(`AuthBlock`);
  const m = useTranslations(`Menu`);

  const image = `/static/images/log-me-in.webp`;
  return (
    <>
      {props.currentSession ? (
        <>{props.children}</>
      ) : (
        <Section
          css={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
            '@md': {
              flexDirection: `row`,
            },
          }}
        >
          <Image
            src={image}
            alt="Log me in"
            height={320}
            width={320}
            priority
          />
          <Box>
            <Paragraph>{t(`message`)}</Paragraph>
            <Link
              href={{
                pathname: `/auth/connect`,
                query: { callBackUrl: router.asPath },
              }}
              passHref
            >
              <Button as="a">{m(`connect`)}</Button>
            </Link>
          </Box>
        </Section>
      )}
    </>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
