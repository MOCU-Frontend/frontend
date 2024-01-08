import React, { ReactNode } from 'react';
import styles from './BottomSheetNoBackgroundBasic.module.css';

interface Props {
  children: ReactNode;
}

const BottomSheetNoBackgroundBasic: React.FC<Props> = ({ children }: Props) => {
  return <div className={styles.sheet}>{children}</div>;
};

export default BottomSheetNoBackgroundBasic;
