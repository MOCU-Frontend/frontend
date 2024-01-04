import React from 'react';
import styles from './SnackBarBodyText.module.css';
interface Props {
  text: string;
}

const SnackBarBodyText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default SnackBarBodyText;
