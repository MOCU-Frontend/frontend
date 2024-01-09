import React from 'react';
import styles from './HomeMenuBtnTitleText.module.css';

interface Props {
  text: string;
}

const HomeMenuBtnTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default HomeMenuBtnTitleText;
