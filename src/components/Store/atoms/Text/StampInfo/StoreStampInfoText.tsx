import React from 'react';
import styles from './StoreStampInfoText.module.css';

interface Props {
  text: string;
}

const StoreStampInfoText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreStampInfoText;
