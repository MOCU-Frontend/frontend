import React from 'react';
import styles from './OwnerCouponItemNameText.module.css';

interface Props {
  text: string;
}

const OwnerCouponItemNameText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerCouponItemNameText;
