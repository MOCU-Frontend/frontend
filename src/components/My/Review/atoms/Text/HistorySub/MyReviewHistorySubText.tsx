import React from 'react';
import styles from './MyReviewHistorySubText.module.css';

interface Props {
  text: string;
}

const MyReviewHistorySubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyReviewHistorySubText;
