import React from 'react';
import styles from './MyRewardStoreNameText.module.css';

interface Props {
  text: string;
}

const MyRewardStoreNameText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyRewardStoreNameText;
