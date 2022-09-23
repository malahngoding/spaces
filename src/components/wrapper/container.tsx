/**
 */
import { ReactElement } from 'react';
import { styledContainer } from './container.css';
/**
 *
 */
interface ParagraphProps {
  children: ReactElement | ReactElement[] | string;
}

export const Container = (props: ParagraphProps): ReactElement => {
  return <div className={styledContainer}>{props.children}</div>;
};
