import React from 'react';
import styles from './MyMainContentSubText.module.css';

interface Props {
  text: string;
}

const MyMainContentSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyMainContentSubText;
