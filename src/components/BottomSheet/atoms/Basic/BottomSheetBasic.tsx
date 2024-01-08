import React, { ReactNode } from 'react';
import styles from './BottomSheetBasic.module.css';

interface Props {
  children: ReactNode;
  isBackgroundBlur: boolean;
}

const BottomSheetBasic: React.FC<Props> = ({
  children,
  isBackgroundBlur,
}: Props) => {
  let sheetScreentStyle = `${styles.sheetScreen}`;
  if (isBackgroundBlur) sheetScreentStyle += ` ${styles.screenBlur}`;
  return (
    <section className={sheetScreentStyle}>
      <div className={styles.sheet}>{children}</div>
    </section>
  );
};

export default BottomSheetBasic;
