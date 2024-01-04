import React from 'react';
import styles from './SnackBarBtn.module.css';

interface Props {
  label: string;
  onClick: () => void;
}

const SnackBarBtn: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
};

export default SnackBarBtn;
