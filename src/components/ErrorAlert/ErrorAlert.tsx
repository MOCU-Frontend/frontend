import React from 'react';
import styles from './ErrorAlert.module.css';
import { ReactComponent as Logo } from '../../assets/icon/logo01.svg';
import { FallbackProps } from 'react-error-boundary';

const ErrorAlert = ({ error, resetErrorBoundary }: FallbackProps) => {
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
      <div className={styles.errorWrapper}>
        <div className={styles.errorText}>{error}</div>
        <div className={styles.resetButton} onClick={resetErrorBoundary}>
          Reset
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
