import React from 'react';
import styles from './StoreReviewTimeText.module.css';

interface Props {
  text: string;
}

const StoreReviewTimeText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreReviewTimeText;
