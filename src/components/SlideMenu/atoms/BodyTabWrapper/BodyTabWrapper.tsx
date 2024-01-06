import React, { ReactNode } from 'react';
import styles from './BodyTabWrapper.module.css';
interface Props {
  children: ReactNode;
}

const BodyTabWrapper: React.FC<Props> = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default BodyTabWrapper;
