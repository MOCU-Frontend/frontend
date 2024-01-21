import React from 'react';
import styles from './StoreScoreBodyText.module.css';

interface Props {
  text: string;
}

const StoreScoreBodyText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreScoreBodyText;
