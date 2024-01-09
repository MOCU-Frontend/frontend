import React from 'react';
import styles from './MyLocationContentText.module.css';

interface Props {
  text: string;
}

const MyLocationContentText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyLocationContentText;
