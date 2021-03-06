/** 3rd Party Modules Import */
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  UilGithubAlt,
  UilPresentationPlay,
  UilInstagram,
  UilYoutube,
} from '@iconscout/react-unicons';
/** Internal Modules Import */
import { Footer } from '@components/design/footer';
import { Box } from '@components/design/box';
import { Caption, Heading, SubTitle } from '@components/design/typography';
import { StyledLink } from '@components/design/link';
/** Types Import */
import type { ReactElement } from 'react';

/**
 * Main Component Declaration
 *
 */

const BottomLinkBox = (): ReactElement => {
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
            url: `/learn/articles`,
          },
          {
            title: t(`snippets`),
            url: `/learn/snippets`,
          },
        ],
      },
      {
        title: t(`camps`),
        insider: [
          {
            title: t(`awesomeNoob`),
            url: `/camps/awesome-noob`,
          },
          {
            title: t(`flashCard`),
            url: `/camps/flash-card`,
          },
          {
            title: t(`code`),
            url: `/camps/code`,
          },
          {
            title: t(`labs`),
            url: `/camps/labs`,
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
          {
            title: t(`workshop`),
            url: `/workshop`,
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
          height="81px"
          width="81px"
        />
        <Box>
          <Heading css={{ fontSize: `$lg`, fontFamily: `$brand` }}>
            Malah
          </Heading>
          <Heading
            css={{ fontSize: `$lg`, fontFamily: `$brand`, marginTop: `-32px` }}
          >
            Ngoding
          </Heading>
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

const SocialLinkBox = (): JSX.Element => {
  return (
    <Box css={{ marginY: `$md` }}>
      <a
        href="https://github.com/malahngoding"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        <UilGithubAlt />
      </a>
      <a
        href="https://youtube.com/malahngoding"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        <UilYoutube />
      </a>
      <a
        href="https://tiktok.com/malahngoding"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        <UilPresentationPlay />
      </a>
      <a
        href="https://instagram.com/malahngoding"
        target="_blank"
        rel="noreferrer"
        style={{ margin: `0px 8px 0px 8px` }}
      >
        <UilInstagram />
      </a>
    </Box>
  );
};

export const FooterNavigation = () => {
  const date = new Date();
  const year = date.getFullYear();

  const t = useTranslations(`Menu`);

  const LanguageToggleLazy = dynamic(
    (): any =>
      import(`@components/language-toggle`).then((mod) => mod.LanguageToggle),
    { ssr: false },
  );

  return (
    <>
      <Footer>
        <Linkage />
        <Caption>
          © 2019-{year} Malah Ngoding. {t(`allRights`)}
        </Caption>
        <BottomLinkBox />
        <LanguageToggleLazy />
        <SocialLinkBox />
      </Footer>
    </>
  );
};
/**
 * Internal Component Declaration
 *
 */
