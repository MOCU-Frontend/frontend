import React from 'react';
import styles from './OwnerCouponItemReviewText.module.css';

interface Props {
  text: string;
}

const OwnerCouponItemReviewText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerCouponItemReviewText;
