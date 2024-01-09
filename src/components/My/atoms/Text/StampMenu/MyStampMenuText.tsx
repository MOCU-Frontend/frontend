import React from 'react';
import styles from './MyStampMenuText.module.css';

interface Props {
  text: string;
}

const MyStampMenuText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyStampMenuText;
