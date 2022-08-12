/**
 *
 */

import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';

interface LinkedLogoProps {
  href: string;
}
export const LinkedLogo = (props: LinkedLogoProps): ReactElement => {
  return (
    <Link href={props.href}>
      <a>
        <Image
          src="/static/favicons/mstile-150x150.png"
          alt="Logo of Malah Ngoding, The Boxes"
          width={48}
          height={48}
        />
      </a>
    </Link>
  );
};
