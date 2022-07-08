/* 3rd Party Modules Import */
import { useRouter } from 'next/router';
/* Internal Modules Import */
import { SmallButton } from '@components/design/button';
import { Box } from '@components/design/box';
/* Types Import */
import type { ReactElement } from 'react';
/**
 * Component Props Declaration
 * @private
 */
/**
 * Component Declaration
 * @public
 */
export const LanguageToggle = (): ReactElement => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const handleLanguageToggle = (_locale: string): void => {
    router.push({ pathname, query }, asPath, { locale: _locale });
  };

  return (
    <Box
      css={{
        display: `flex`,
        flexDirection: `row`,
        paddingY: `$xs`,
        marginY: `$xs`,
      }}
    >
      <SmallButton
        alternative={locale === `en` ? `secondary` : `ghost`}
        css={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          alignItems: `center`,
          marginRight: `$xs`,
        }}
        onClick={() => handleLanguageToggle(`en`)}
      >
        EN
      </SmallButton>
      <SmallButton
        alternative={locale === `id` ? `secondary` : `ghost`}
        css={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          alignItems: `center`,
          marginLeft: `$xs`,
        }}
        onClick={() => handleLanguageToggle(`id`)}
      >
        ID
      </SmallButton>
    </Box>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
