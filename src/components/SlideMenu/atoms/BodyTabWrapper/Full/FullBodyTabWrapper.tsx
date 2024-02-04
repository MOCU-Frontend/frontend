import React, { ReactNode } from 'react';
import styles from './FullBodyTabWrapper.module.css';
interface Props {
  children: ReactNode;
}

const FullBodyTabWrapper: React.FC<Props> = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default FullBodyTabWrapper;
