/**
 */
import { styledMain, styledPageWrapper } from './page-wrapper.css';
import { ReactElement } from 'react';
/**
 *
 */
interface PageWrapperProps {
  children: ReactElement | ReactElement[] | string;
}

export const PageWrapper = (props: PageWrapperProps): ReactElement => {
  return (
    <div className={styledPageWrapper}>
      <div className={styledMain}>{props.children}</div>
    </div>
  );
};
