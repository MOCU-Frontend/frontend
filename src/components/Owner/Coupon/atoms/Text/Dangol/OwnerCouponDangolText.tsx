import React from 'react';
import styles from './OwnerCouponDangolText.module.css';

interface Props {
  text: string;
}

const OwnerCouponDangolText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerCouponDangolText;
