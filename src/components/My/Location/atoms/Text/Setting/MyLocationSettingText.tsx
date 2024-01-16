import React from 'react';
import styles from './MyLocationSettingText.module.css';

interface Props {
  text: string;
  color: string;
}

const MyLocationSettingText: React.FC<Props> = ({ text, color }: Props) => {
  return (
    <p style={{ color }} className={styles.text}>
      {text}
    </p>
  );
};

export default MyLocationSettingText;
