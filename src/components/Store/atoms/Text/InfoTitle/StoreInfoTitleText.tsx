import React from 'react';
import styles from './StoreInfoTitleText.module.css';

interface Props {
  text: string | undefined;
}

const StoreInfoTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default StoreInfoTitleText;
