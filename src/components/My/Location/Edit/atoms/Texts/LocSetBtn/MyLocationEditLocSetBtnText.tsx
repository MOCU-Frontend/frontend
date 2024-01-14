import React from 'react';
import styles from './MyLocationEditLocSetBtnText.module.css';

interface Props {
  text: string;
  color: string;
}

const MyLocationEditLocSetBtnText: React.FC<Props> = ({
  text,
  color,
}: Props) => {
  return (
    <p style={{ color }} className={styles.text}>
      {text}
    </p>
  );
};

export default MyLocationEditLocSetBtnText;
