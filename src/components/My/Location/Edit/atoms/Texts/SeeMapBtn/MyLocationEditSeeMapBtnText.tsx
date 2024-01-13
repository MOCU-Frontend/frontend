import React from 'react';
import styles from './MyLocationEditSeeMapBtnText.module.css';

interface Props {
  text: string;
}

const MyLocationEditSeeMapBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyLocationEditSeeMapBtnText;
