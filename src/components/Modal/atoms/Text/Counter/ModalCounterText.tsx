import React from 'react';
import styles from './ModalCounterText.module.css';

interface Props {
  text: string;
}

const ModalCounterText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ModalCounterText;
