/**
 *
 */

import Image from 'next/image';
import type { ReactElement } from 'react';

interface LogoProps {
  size?: number;
}

export const Logo = (props: LogoProps): ReactElement => {
  let size = props.size !== undefined ? props.size : 64;
  return (
    <Image
      src="/static/favicons/mstile-150x150.png"
      alt="Logo of Malah Ngoding, The Boxes"
      width={size}
      height={size}
    />
  );
};
