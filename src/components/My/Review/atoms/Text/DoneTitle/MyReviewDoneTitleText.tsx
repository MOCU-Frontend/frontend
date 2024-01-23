import React from 'react';
import styles from './MyReviewDoneTitleText.module.css';

interface Props {
  text: string;
}

const MyReviewDoneTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyReviewDoneTitleText;
