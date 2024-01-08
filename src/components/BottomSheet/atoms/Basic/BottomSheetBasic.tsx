import React, { ReactNode } from 'react';
import styles from './BottomSheetBasic.module.css';

interface Props {
  children: ReactNode;
  isBackgroundBlur: boolean;
  wrapperRef: React.RefObject<HTMLDivElement>;
}

const BottomSheetBasic: React.FC<Props> = ({
  children,
  isBackgroundBlur,
  wrapperRef,
}: Props) => {
  let sheetScreentStyle = `${styles.sheetScreen}`;
  if (isBackgroundBlur) sheetScreentStyle += ` ${styles.screenBlur}`;
  return (
    <section className={sheetScreentStyle} ref={wrapperRef}>
      <div className={styles.sheet}>{children}</div>
    </section>
  );
};

export default BottomSheetBasic;
