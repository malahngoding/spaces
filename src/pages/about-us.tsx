/*
 */
import type { GetStaticProps, NextPage } from 'next';
import { Heading, SubHeading } from '@components/typography/heading';
import { I18nProps, useI18n } from 'next-rosetta';
import { BaseLayout } from '@layouts/base';
import { Button } from '@components/button/base';
import type { InsteadLocale } from '@modules/i18n';
import { Paragraph } from '@components/typography/paragraph';
import dynamic from 'next/dynamic';
import { useCookiesPersist } from '@modules/cookies/cookie-consent.store';
/*
 *
 */
const LocaleSwitcherLazy = dynamic(
  (): any => import(`@modules/shared/locale-switcher`),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: `38.4px` }}>
        <Paragraph>Loading..</Paragraph>
      </div>
    ),
  },
);
const ThemeSwitcherLazy = dynamic(
  (): any => import(`@modules/shared/theme-switcher`),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: `66.4px` }}>
        <Paragraph>Loading..</Paragraph>
      </div>
    ),
  },
);
const ServicePingLazy = dynamic((): any => import(`@modules/shared/ping`), {
  ssr: false,
  loading: () => (
    <div style={{ height: `39.2px` }}>
      <Paragraph>Loading..</Paragraph>
    </div>
  ),
});
/**
 */
export const AboutUsPage: NextPage = (props: any) => {
  const { t } = useI18n<InsteadLocale>();

  /**
   *
   */
  const resetConsentValue = useCookiesPersist((state) => state.reset);
  const handleReset = (): void => {
    resetConsentValue();
  };

  const wallOfText: string[] = [
    `gRPCでは、呼び出した関数の引数・戻り値の情報は、そのままプレーンテキストで書くのではなく、Protocol Buffersというシリアライズ方式を用いて変換した内容をリクエスト・レスポンスボディに含めることになっています。`,
    `RPCは関数の呼び出しのわけですから、その関数の定義・戻り値・引数の定義をしていく必要があります。そのProcedureの定義を、gPRCではprotoファイルというものを使って行っています。`,
    `この章では、protoファイルの記述の仕方について簡単に触れていきます。`,
    `protoファイルを記述するProtocol Buffer Languageには、現在proto2とproto3の2種類のバージョンが存在します。最新バージョンであるproto3を使うには、明示的にバージョン指定をする必要があります。これを省略するとptoro2で書かれた記述とみなされます。`,
    `詳細は後述しますが、protoファイルでは「他のprotoファイルで定義された型を使って記述する」ということもできるようになっており、その際に「パッケージ名.型名」という形で他のprotoファイル内の型を参照することになります。意味合いとしてはGoでのパッケージ宣言と同じです。`,
    `上で紹介したHelloRequest型・HelloResponse型にはstring型しか使用していませんが、他にもint型やbool型、enum型といった様々な型がprotobufには用意されています。どんな型・どんなデータ構造が用意されているのかについては、詳細に書いていくとそれだけで本一冊が書けてしまう内容なのでここでは割愛させていただきます。`,
  ];

  return (
    <BaseLayout title="About Us">
      <Button onClick={handleReset}>Reset Cookie Consent</Button>
      <br />
      <LocaleSwitcherLazy />
      <br />
      <ThemeSwitcherLazy />
      <br />
      <ServicePingLazy />
      <br />
      <div style={{ display: `flex`, flexWrap: `wrap` }}>
        {Array.from(Array(2).keys()).map((item: number) => {
          return (
            <div key={item} style={{ marginRight: `1em` }}>
              <Heading>{t('title')}</Heading>
              <SubHeading>{t('title')}</SubHeading>
              <>
                {wallOfText.map((item) => {
                  return <Paragraph key={item}>{item}</Paragraph>;
                })}
              </>
            </div>
          );
        })}
      </div>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<InsteadLocale>> = async (
  context,
) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`@modules/i18n/${locale}`);
  return {
    props: { table },
  };
};

export default AboutUsPage;
