import React from 'react';
import styles from './OwnerInformSecTitleText.module.css';

interface Props {
  text: string;
}

const OwnerInformSecTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default OwnerInformSecTitleText;
