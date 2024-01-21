import React from 'react';
import styles from './ScoreGageBar.module.css';

interface Props {
  ratio: number;
}

const ScoreGageBar: React.FC<Props> = ({ ratio }: Props) => {
  return (
    <div className={styles.backgroundBar}>
      <div style={{ width: `${ratio}%` }} className={styles.mainBar}></div>
    </div>
  );
};

export default ScoreGageBar;
