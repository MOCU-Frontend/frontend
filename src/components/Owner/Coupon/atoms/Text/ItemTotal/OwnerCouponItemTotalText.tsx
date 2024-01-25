import React from 'react';
import styles from './OwnerCouponItemTotalText.module.css';

interface Props {
  text: string;
}

const OwnerCouponItemTotalText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerCouponItemTotalText;
