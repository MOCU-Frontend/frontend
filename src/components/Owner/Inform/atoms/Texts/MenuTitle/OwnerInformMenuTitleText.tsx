import React from 'react';
import styles from './OwnerInformMenuTitleText.module.css';

interface Props {
  text: string;
}

const OwnerInformMenuTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default OwnerInformMenuTitleText;
