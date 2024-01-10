import React from 'react';
import styles from './MyLocationSettingText.module.css';

interface Props {
  text: string;
}

const MyLocationSettingText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyLocationSettingText;
