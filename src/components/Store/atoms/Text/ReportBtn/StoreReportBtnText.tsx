import React from 'react';
import styles from './StoreReportBtnText.module.css';

interface Props {
  text: string;
}

const StoreReportBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default StoreReportBtnText;
