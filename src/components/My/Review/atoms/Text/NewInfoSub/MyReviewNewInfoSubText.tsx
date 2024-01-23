import React from 'react';
import styles from './MyReviewNewInfoSubText.module.css';

interface Props {
  text: string;
}

const MyReviewNewInfoSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyReviewNewInfoSubText;
