import React from 'react';
import styles from './OwnerInformSecBodyText.module.css';

interface Props {
  text: string;
}

const OwnerInformSecBodyText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default OwnerInformSecBodyText;
