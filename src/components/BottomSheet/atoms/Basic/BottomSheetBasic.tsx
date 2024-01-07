import React, { ReactNode } from 'react';
import styles from './BottomSheetBasic.module.css';

interface Props {
  children: ReactNode;
}

const BottomSheetBasic: React.FC<Props> = ({ children }: Props) => {
  return (
    <section className={styles.sheetScreen}>
      <div className={styles.sheet}>{children}</div>
    </section>
  );
};

export default BottomSheetBasic;
