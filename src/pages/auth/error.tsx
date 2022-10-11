/**
 *
 */
import { useRouter } from 'next/router';

function AuthErrorPage() {
  const router = useRouter();

  return <div> {router.query.error}</div>;
}

export default AuthErrorPage;
