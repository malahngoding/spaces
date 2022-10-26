import Link from 'next/link';

const wank = async () => {
  return 'data';
};

export default async function ServerPage() {
  const data = await wank();
  return (
    <div>
      <h1>Server Component</h1>
      {data}
      <div>
        <Link href={`/experiments`}>EXP</Link>
      </div>
    </div>
  );
}
