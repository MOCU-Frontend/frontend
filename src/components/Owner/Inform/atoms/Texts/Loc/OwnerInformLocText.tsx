import React from 'react';
import styles from './OwnerInformLocText.module.css';

interface Props {
  text: string;
}

const OwnerInformLocText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformLocText;
