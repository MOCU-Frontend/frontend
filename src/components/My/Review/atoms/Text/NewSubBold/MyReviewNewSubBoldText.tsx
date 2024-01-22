import React from 'react';
import styles from './MyReviewNewSubBoldText.module.css';

interface Props {
  text: string;
}

const MyReviewNewSubBoldText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyReviewNewSubBoldText;
