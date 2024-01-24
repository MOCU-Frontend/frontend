import React from 'react';
import styles from './OwnerInformEditCheckBoxText.module.css';

interface Props {
  text: string;
}

const OwnerInformEditCheckBoxText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformEditCheckBoxText;
