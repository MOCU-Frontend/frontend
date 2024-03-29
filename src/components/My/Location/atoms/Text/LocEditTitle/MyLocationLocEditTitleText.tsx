import React from 'react';
import styles from './MyLocationLocEditTitleText.module.css';

interface Props {
  text: string;
}

const MyLocationLocEditTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyLocationLocEditTitleText;
