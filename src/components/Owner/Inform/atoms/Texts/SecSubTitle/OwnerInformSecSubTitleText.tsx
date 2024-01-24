import React from 'react';
import styles from './OwnerInformSecSubTitleText.module.css';

interface Props {
  text: string;
}

const OwnerInformSecSubTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default OwnerInformSecSubTitleText;
