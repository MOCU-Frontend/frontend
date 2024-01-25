import React from 'react';
import styles from './OwnerInformMenuSubText.module.css';

interface Props {
  text: string;
}

const OwnerInformMenuSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformMenuSubText;
