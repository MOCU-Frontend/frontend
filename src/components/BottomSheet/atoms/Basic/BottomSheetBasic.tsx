import React, { ReactNode, useEffect } from 'react';
import styles from './BottomSheetBasic.module.css';

interface Props {
  children: ReactNode;
  isBackgroundBlur: boolean;
  wrapperRef: React.RefObject<HTMLDivElement>;
  onClickNotBottomSheet: () => void;
}

const BottomSheetBasic: React.FC<Props> = ({
  children,
  isBackgroundBlur,
  wrapperRef,
  onClickNotBottomSheet,
}: Props) => {
  let sheetScreentStyle = `${styles.sheetScreen}`;
  if (isBackgroundBlur) sheetScreentStyle += ` ${styles.screenBlur}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickNotBottomSheet();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, onClickNotBottomSheet]);
  return (
    <section className={sheetScreentStyle}>
      <div className={styles.sheet} ref={wrapperRef}>
        {children}
      </div>
    </section>
  );
};

export default BottomSheetBasic;
