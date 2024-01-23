import React from 'react';
import styles from './MyReivewHistoryTitleText.module.css';

interface Props {
  text: string;
}

const MyReivewHistoryTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyReivewHistoryTitleText;
