import React, { ReactNode } from 'react';
import styles from './MapContentWrapper.module.css';

interface Props {
  children: ReactNode;
}

const MapContentWrapper: React.FC<Props> = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default MapContentWrapper;
