import React from 'react';
import styles from './OwnerInformEditBodyText.module.css';

interface Props {
  text: string;
}

const OwnerInformEditBodyText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformEditBodyText;
