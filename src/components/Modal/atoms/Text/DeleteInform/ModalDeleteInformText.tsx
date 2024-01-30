import React from 'react';
import styles from './ModalDeleteInformText.module.css';

interface Props {
  text: string;
}

const ModalDeleteInformText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ModalDeleteInformText;
