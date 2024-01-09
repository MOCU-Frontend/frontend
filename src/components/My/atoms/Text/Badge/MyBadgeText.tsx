import React from 'react';
import styles from './MyBadgeText.module.css';

interface Props {
  text: string;
}

const MyBadgeText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyBadgeText;
