/**
 *
 */
import Link from 'next/link';
import { Paragraph } from 'components/typography/paragraph';
import { useRouter } from 'next/router';

function AuthErrorPage() {
  const router = useRouter();

  return (
    <div>
      <Paragraph>{router.query?.error?.toString() || `ERR`}</Paragraph>
      <Link href="/" passHref>
        Back
      </Link>
    </div>
  );
}

export default AuthErrorPage;
