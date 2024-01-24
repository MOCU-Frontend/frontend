import React from 'react';
import styles from './OwnerInformEditInformText.module.css';

interface Props {
  text: string;
}

const OwnerInformEditInformText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformEditInformText;
