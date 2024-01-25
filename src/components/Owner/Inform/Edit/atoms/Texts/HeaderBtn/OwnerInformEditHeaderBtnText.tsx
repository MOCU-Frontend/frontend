import React from 'react';
import styles from './OwnerInformEditHeaderBtnText.module.css';

interface Props {
  text: string;
}

const OwnerInformEditHeaderBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformEditHeaderBtnText;
