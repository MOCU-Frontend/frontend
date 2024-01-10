import React from 'react';
import styles from './MyMainContentHeaderTitleText.module.css';

interface Props {
  text: string;
}

const MyMainContentHeaderTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyMainContentHeaderTitleText;
