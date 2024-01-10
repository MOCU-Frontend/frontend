import React from 'react';
import styles from './MyQuickMenuTitleText.module.css';

interface Props {
  text: string;
}

const MyQuickMenuTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyQuickMenuTitleText;
