/**
 */
import { ReactElement } from 'react';
import { styledContainer } from './container.css';
/**
 *
 */
interface ContainerProps {
  children: ReactElement | ReactElement[] | string;
}

export const Container = (props: ContainerProps): ReactElement => {
  return <div className={styledContainer}>{props.children}</div>;
};
