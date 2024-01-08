import React, { ReactNode } from 'react';
import styles from './BottomSheetNoBackgroundBasic.module.css';

interface Props {
  children: ReactNode;
  wrapperRef: React.RefObject<HTMLDivElement>;
}

const BottomSheetNoBackgroundBasic: React.FC<Props> = ({
  children,
  wrapperRef,
}: Props) => {
  return (
    <div className={styles.sheet} ref={wrapperRef}>
      {children}
    </div>
  );
};

export default BottomSheetNoBackgroundBasic;
