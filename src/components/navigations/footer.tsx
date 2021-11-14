import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Footer } from '@components/design/footer';
import { Box } from '@components/design/box';
import { Caption, Heading, SubTitle } from '@components/design/typography';
import { StyledLink } from '@components/design/link';

const BottomLinkBox = () => {
  const t = useTranslations(`Menu`);

  return (
    <Box
      css={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `auto`,
        marginTop: `$sm`,
        marginBottom: `$md`,
      }}
    >
      <Link href="/privacy-policy" passHref>
        <StyledLink>
          <Caption>{t(`privacyPolicy`)}</Caption>
        </StyledLink>
      </Link>
      <Caption css={{ marginX: `$xs`, fontWeight: `$bold` }}>·</Caption>
      <Link href="/terms-and-condition" passHref>
        <StyledLink>
          <Caption>{t(`termsAndCondition`)}</Caption>
        </StyledLink>
      </Link>
      <Caption css={{ marginX: `$xs`, fontWeight: `$bold` }}>·</Caption>
      <Link href="/cookie-settings" passHref>
        <StyledLink>
          <Caption>{t(`cookieSettings`)}</Caption>
        </StyledLink>
      </Link>
    </Box>
  );
};

const Linkage = () => {
  const logo = `Malah Ngoding Logo`;
  const t = useTranslations(`Menu`);

  const linkageObject = {
    main: [
      {
        title: t(`learn`),
        insider: [
          {
            title: t(`articles`),
            url: `/articles`,
          },
          {
            title: t(`snippets`),
            url: `/snippets`,
          },
          {
            title: t(`flashCard`),
            url: `/flash-card`,
          },
        ],
      },
      {
        title: t(`camps`),
        insider: [
          {
            title: t(`awesomeNoob`),
            url: `/awesome-noob`,
          },
          {
            title: t(`code`),
            url: `/code`,
          },
          {
            title: t(`labs`),
            url: `/labo`,
          },
        ],
      },
      {
        title: t(`services`),
        insider: [
          {
            title: t(`mentor`),
            url: `/mentor`,
          },
          {
            title: t(`development`),
            url: `/software-consulting`,
          },
        ],
      },
      {
        title: t(`ours`),
        insider: [
          {
            title: t(`openSource`),
            url: `/open-source`,
          },
          {
            title: t(`aboutUs`),
            url: `/about-us`,
          },
          {
            title: t(`helpAndFaqs`),
            url: `/help-and-faqs`,
          },
        ],
      },
    ],
  };

  return (
    <Box
      css={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
        alignItems: `flex-start`,
        marginY: `$md`,
        width: `100%`,
        '@sm': {
          width: `90%`,
        },
        '@lg': {
          justifyContent: `space-between`,
          alignItems: `center`,
          flexDirection: `row`,
        },
      }}
    >
      <Box>
        <Image
          alt={logo}
          src="/static/favicons/android-chrome-96x96.png"
          height={81}
          width={81}
        />
        <Box>
          <Heading css={{ fontSize: `$lg` }}>Malah</Heading>
          <Heading css={{ fontSize: `$lg` }}>Ngoding</Heading>
        </Box>
      </Box>
      <Box
        css={{
          display: `flex`,
          flexDirection: `column`,
          flexWrap: `wrap`,
          '@lg': {
            flexDirection: `row`,
          },
        }}
      >
        {linkageObject.main.map((item) => (
          <Box
            key={item.title}
            css={{
              marginY: `$sm`,
              marginLeft: `none`,
              display: `flex`,
              flexDirection: `column`,
              flexWrap: `wrap`,
              '@lg': {
                marginLeft: `$lg`,
              },
            }}
          >
            <SubTitle css={{ marginBottom: `$xs` }}>{item.title}</SubTitle>
            <Box
              css={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `flex-start`,
                alignItems: `flex-start`,
              }}
            >
              {item.insider.map((inside) => (
                <Link key={inside.url} href={inside.url} passHref>
                  <StyledLink>{inside.title}</StyledLink>
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterNavigation = () => {
  const t = useTranslations(`Menu`);

  const ThemeToggleComponent = dynamic((): any =>
    import(`@components/theme-toggle`).then((mod) => mod.ThemeToggle),
  );
  const LanguageToggleComponent = dynamic((): any =>
    import(`@components/language-toggle`).then((mod) => mod.LanguageToggle),
  );

  return (
    <>
      <Footer>
        <Linkage />
        <Caption>© 2021 Instead Malah Ngoding. {t(`allRights`)}</Caption>
        <BottomLinkBox />
        <LanguageToggleComponent />
        <ThemeToggleComponent />
      </Footer>
    </>
  );
};
