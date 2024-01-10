import React from 'react';
import styles from './HomeMenuBtnSubText.module.css';

interface Props {
  text: string;
}

const HomeMenuBtnSubText: React.FC<Props> = ({ text }: Props) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default HomeMenuBtnSubText;
