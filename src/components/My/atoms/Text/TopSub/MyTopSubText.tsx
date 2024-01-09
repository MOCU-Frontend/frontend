import React from 'react';
import styles from './MyTopSubText.module.css';

interface Props {
  text: string;
}

const MyTopSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyTopSubText;
