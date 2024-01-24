import React from 'react';
import styles from './OwnerHomeHelloContentText.module.css';

interface Props {
  text: string;
}

const OwnerHomeHelloContentText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerHomeHelloContentText;
