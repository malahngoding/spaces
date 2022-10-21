/**
 */
import { styledHeading, styledSubHeading } from './heading.css';
import { ReactElement } from 'react';
/**
 *
 */
interface HeadingProps {
  children: ReactElement | ReactElement[] | string;
}

export const Heading = (props: HeadingProps): ReactElement => {
  return <h1 className={styledHeading}>{props.children}</h1>;
};

export const SubHeading = (props: HeadingProps): ReactElement => {
  return <h3 className={styledSubHeading}>{props.children}</h3>;
};
