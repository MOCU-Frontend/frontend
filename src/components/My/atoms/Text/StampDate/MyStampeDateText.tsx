import React from 'react';
import styles from './MyStampeDateText.module.css';

interface Props {
  text: string;
}

const MyStampeDateText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyStampeDateText;
