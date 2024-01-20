import React from 'react';
import styles from './StoreScoreTitleText.module.css';

interface Props {
  text: string;
}

const StoreScoreTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default StoreScoreTitleText;
