import React from 'react';
import styles from './ReviewScoreText.module.css';

interface Props {
  text: string;
}

const ReviewScoreText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ReviewScoreText;
