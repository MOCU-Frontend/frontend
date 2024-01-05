import React from 'react';
import styles from './ModalTimerText.module.css';
interface Props {
  text: string;
}

const ModalTimerText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ModalTimerText;
