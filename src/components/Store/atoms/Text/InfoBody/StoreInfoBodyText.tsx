import React from 'react';
import styles from './StoreInfoBodyText.module.css';

interface Props {
  text: string;
}

const StoreInfoBodyText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreInfoBodyText;
