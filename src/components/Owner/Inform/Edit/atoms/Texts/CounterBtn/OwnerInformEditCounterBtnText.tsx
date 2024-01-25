import React from 'react';
import styles from './OwnerInformEditCounterBtnText.module.css';

interface Props {
  text: string;
}

const OwnerInformEditCounterBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformEditCounterBtnText;
