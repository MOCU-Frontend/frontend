import React from 'react';
import styles from './StoreReviewBodyText.module.css';

interface Props {
  text: string;
}

const StoreReviewBodyText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreReviewBodyText;
