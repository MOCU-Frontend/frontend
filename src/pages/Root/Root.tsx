import React from 'react';
import styles from './Root.module.css';

const Root = ({ text }: { text: string }) => {
  return <div className={styles.wrapper}>{text}</div>;
};

export default Root;
