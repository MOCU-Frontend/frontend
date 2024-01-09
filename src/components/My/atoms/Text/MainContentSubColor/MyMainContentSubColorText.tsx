import React from 'react';
import styles from './MyMainContentSubColorText.module.css';

interface Props {
  text: string;
}

const MyMainContentSubColorText: React.FC<Props> = ({ text }: Props) => {
  return <div className={styles.text}>{text}</div>;
};

export default MyMainContentSubColorText;
