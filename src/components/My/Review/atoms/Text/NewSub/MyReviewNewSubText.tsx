import React from 'react';
import styles from './MyReviewNewSubText.module.css';

interface Props {
  text: string;
}

const MyReviewNewSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyReviewNewSubText;
