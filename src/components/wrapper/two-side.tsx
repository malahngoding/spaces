/**
 */
import { styledMain, styledSide, styledTwoSide } from './two-side.css';
import { ReactElement } from 'react';
/**
 *
 */
interface TwoSideProps {
  children: ReactElement | ReactElement[] | string;
  sideChildren: ReactElement | ReactElement[] | string;
}

export const TwoSide = (props: TwoSideProps): ReactElement => {
  return (
    <div className={styledTwoSide}>
      <div className={styledMain}>{props.children}</div>
      <div className={styledSide}>{props.sideChildren}</div>
    </div>
  );
};
