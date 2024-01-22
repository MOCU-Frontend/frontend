import React from 'react';
import styles from './MyReviewNewInfoTitleText.module.css';

interface Props {
  text: string;
}

const MyReviewNewInfoTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyReviewNewInfoTitleText;
