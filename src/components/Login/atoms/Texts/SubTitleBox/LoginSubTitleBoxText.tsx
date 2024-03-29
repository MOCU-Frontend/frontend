import React from 'react';
import styles from './LoginSubTitleBoxText.module.css';

interface Props {
  text: string;
}

const LoginSubTitleBoxText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default LoginSubTitleBoxText;
