import React, { ReactNode } from 'react';
import styles from './BodyTabWrapperNoPadding.module.css';
interface Props {
  children: ReactNode;
}

const BodyTabWrapperNoPadding: React.FC<Props> = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default BodyTabWrapperNoPadding;
