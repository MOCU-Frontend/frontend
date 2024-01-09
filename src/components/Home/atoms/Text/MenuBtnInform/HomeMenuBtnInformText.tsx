import React from 'react';
import styles from './HomeMenuBtnInformText.module.css';

interface Props {
  text: string;
}

const HomeMenuBtnInformText: React.FC<Props> = ({ text }: Props) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default HomeMenuBtnInformText;
