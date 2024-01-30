import React from 'react';
import styles from './ModalDeleteSubText.module.css';

interface Props {
  text: string;
}

const ModalDeleteSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ModalDeleteSubText;
