import React from 'react';
import styles from './StoreMoreBtnText.module.css';

interface Props {
  text: string;
}

const StoreMoreBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreMoreBtnText;
