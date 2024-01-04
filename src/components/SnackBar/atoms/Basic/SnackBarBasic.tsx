import React, { ReactNode } from 'react';
import styles from './SnackBarBasic.module.css';
interface Props {
  children: ReactNode;
  backgroundColor: string;
}

const SnackBarBasic: React.FC<Props> = ({
  children,
  backgroundColor,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.snackBar} style={{ backgroundColor }}>
        {children}
      </div>
    </div>
  );
};

export default SnackBarBasic;
