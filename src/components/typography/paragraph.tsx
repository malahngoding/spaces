/**
 */
import { ReactElement } from 'react';
import { styledParagraph } from './paragraph.css';
/**
 *
 */
interface ParagraphProps {
  children: ReactElement | ReactElement[] | string;
}

export const Paragraph = (props: ParagraphProps): ReactElement => {
  return <p className={styledParagraph}>{props.children}</p>;
};
