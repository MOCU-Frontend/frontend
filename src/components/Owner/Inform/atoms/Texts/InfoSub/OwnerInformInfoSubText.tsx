import React from 'react';
import styles from './OwnerInformInfoSubText.module.css';

interface Props {
  text: string;
}

const OwnerInformInfoSubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformInfoSubText;
