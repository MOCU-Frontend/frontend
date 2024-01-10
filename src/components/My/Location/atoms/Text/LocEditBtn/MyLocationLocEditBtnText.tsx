import React from 'react';
import styles from './MyLocationLocEditBtnText.module.css';

interface Props {
  text: string;
}

const MyLocationLocEditBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyLocationLocEditBtnText;
