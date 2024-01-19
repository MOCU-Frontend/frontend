import React from 'react';
import styles from './StoreAccumBtnText.module.css';

interface Props {
  text: string;
}

const StoreAccumBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreAccumBtnText;
