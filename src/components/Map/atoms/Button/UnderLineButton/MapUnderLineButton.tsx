import React from 'react';
import styles from './MapUnderLineButton.module.css';

interface Props {
  label: string;
  onClick: () => void;
}

const MapUnderLineButton: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <p className={styles.btnText}>{label}</p>
    </button>
  );
};

export default MapUnderLineButton;
