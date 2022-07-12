/** 3rd Party Modules Import */
import { useTranslations } from 'next-intl';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { HeroLayout } from '@layouts/hero-layout';
import { getCampsList } from '@services/camps-services';
import { AltHero } from '@components/branding/hero-alt';
import { CampsCard } from '@components/cards/camps-card';
/** Types Import */
import type { GetStaticPropsContext } from 'next';

/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
interface LabsProps {
  courses: string;
  slug: string;
}

export default function Labs(props: LabsProps) {
  const t = useTranslations(`Camps`);

  const imageURL = `https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=10`;
  const experiments = [
    {
      id: 1,
      image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png`,
      description: `Computer Science is the world's first superpower. It enables people of all backgrounds to earn a six figure salary while building the world of tomorrow.`,
      title: `Learn to code, Build your future.`,
      slug: props.slug,
      courses: props.courses,
    },
  ];
  return (
    <HeroLayout title={t(`codeTitle`)}>
      <Box>
        <AltHero
          image={imageURL}
          title={t(`codeTitle`)}
          description={t(`codeDescription`)}
          height="65vh"
        />
        <Section
          css={{
            display: `grid`,
            gap: `$xs`,
            gridTemplateColumns: `1fr`,
            '@md': {
              gridTemplateColumns: `1fr`,
            },
          }}
        >
          {experiments.map((item) => {
            return (
              <CampsCard
                key={item.id}
                id={item.id}
                image={item.image}
                description={item.description}
                title={item.title}
                slug={item.slug}
                courses={item.courses}
              />
            );
          })}
        </Section>
      </Box>
    </HeroLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  const campsContent = await getCampsList({ lang: locale || `` });
  return {
    props: {
      messages,
      courses: campsContent.data.payload.courses,
      slug: campsContent.data.payload.slug,
    },
  };
}
