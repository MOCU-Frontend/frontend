import React from 'react';
import styles from './ModalBodyText.module.css';
interface Props {
  text: string;
}

const ModalBodyText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.bodyText}>{text}</h1>;
};

export default ModalBodyText;
