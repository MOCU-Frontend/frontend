import React from 'react';
import styles from './Loading.module.css';
import { ReactComponent as Logo } from '../../assets/icon/logo01.svg';

interface Props {}

const Loading: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <Logo width={88} height={84} />
      <div className={styles.loadingCircles}>
        <div
          className={`${styles.loadingCircle} ${styles.loadingCircle1}`}
        ></div>
        <div
          className={`${styles.loadingCircle} ${styles.loadingCircle2}`}
        ></div>
        <div
          className={`${styles.loadingCircle} ${styles.loadingCircle3}`}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
