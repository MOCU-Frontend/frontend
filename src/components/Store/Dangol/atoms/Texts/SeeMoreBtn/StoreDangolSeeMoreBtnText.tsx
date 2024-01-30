import React from 'react';
import styles from './StoreDangolSeeMoreBtnText.module.css';

interface Props {
  text: string;
}

const StoreDangolSeeMoreBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreDangolSeeMoreBtnText;
