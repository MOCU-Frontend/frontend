import React from 'react';
import styles from './ModalCounterNumText.module.css';

interface Props {
  text: string;
}

const ModalCounterNumText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ModalCounterNumText;
