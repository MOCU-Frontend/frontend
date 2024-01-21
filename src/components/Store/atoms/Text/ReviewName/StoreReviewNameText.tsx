import React from 'react';
import styles from './StoreReviewNameText.module.css';

interface Props {
  text: string;
}

const StoreReviewNameText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default StoreReviewNameText;
