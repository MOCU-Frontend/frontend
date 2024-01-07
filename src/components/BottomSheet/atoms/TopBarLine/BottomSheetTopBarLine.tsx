import React from 'react';
import styles from './BottomSheetTopBarLine.module.css';

interface Props {}

const BottomSheetTopBarLine: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
    </div>
  );
};

export default BottomSheetTopBarLine;
