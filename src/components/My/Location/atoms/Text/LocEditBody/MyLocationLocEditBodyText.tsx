import React from 'react';
import styles from './MyLocationLocEditBodyText.module.css';

interface Props {
  text: string;
}

const MyLocationLocEditBodyText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyLocationLocEditBodyText;
