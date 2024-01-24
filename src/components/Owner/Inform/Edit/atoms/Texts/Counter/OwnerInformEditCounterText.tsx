import React from 'react';
import styles from './OwnerInformEditCounterText.module.css';

interface Props {
  text: string;
}

const OwnerInformEditCounterText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformEditCounterText;
