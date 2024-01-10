import React, { ReactNode } from 'react';
import styles from './MyMainLocationWrapper.module.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const MyMainLocationWrapper: React.FC<Props> = ({
  children,
  onClick,
}: Props) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {children}
    </div>
  );
};

export default MyMainLocationWrapper;
