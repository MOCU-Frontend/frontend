import React from 'react';
import styles from './OwnerCouponItemSubText.module.css';

interface Props {
  text: string;
}

const OwnerCouponItemSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerCouponItemSubText;
