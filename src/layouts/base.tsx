import type { ReactElement } from 'react';
import { styledBase } from './base.css';
type BaseLayoutProps = {
  children: ReactElement | ReactElement[];
};

const BaseLayout = (props: BaseLayoutProps): ReactElement => {
  return <div className={styledBase}>{props.children}</div>;
};

export { BaseLayout };
