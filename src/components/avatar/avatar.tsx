/**
 *
 */

import { PersonIcon } from '@radix-ui/react-icons';
import { ReactElement } from 'react';
import { styledAvatar } from './avatar.css';
/**
 *
 */
interface AvatarProps {
  mediaUrl?: string;
}
export const Avatar = (props: AvatarProps): ReactElement => {
  return (
    <button className={styledAvatar}>
      <PersonIcon />
    </button>
  );
};
