import React from 'react';
import styles from './ModalDeleteNextText.module.css';

interface Props {
  text: string;
}

const ModalDeleteNextText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default ModalDeleteNextText;
