import React from 'react';
import styles from './MyStampMenuNumText.module.css';

interface Props {
  text: string;
}

const MyStampMenuNumText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyStampMenuNumText;
