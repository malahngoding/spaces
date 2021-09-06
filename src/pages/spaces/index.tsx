import { BaseLayout } from '@layouts/base';
import { GetStaticProps } from 'next';

interface SpacesProps {
  data: any;
}

export default function Space(props: SpacesProps) {
  const { data } = props;
  return (
    <BaseLayout title="Space">
      <div>{data.data.content}</div>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps<SpacesProps> = async () => {
  const headers = new Headers();

  headers.append(`Authorization`, `Bearer ${process.env.INSTEAD_TOKEN}`);

  const res = await fetch(
    `https://instead.malahngoding.com/items/guide/00b47568-742b-4088-84ab-ba49e2bdd1bc`,
    { method: `GET`, headers },
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
