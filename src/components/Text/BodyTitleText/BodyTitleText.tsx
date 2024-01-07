import React from 'react';
import styles from './BodyTitleText.module.css';
interface Props {
  color: string;
  text: string;
}

const BodyTitleText: React.FC<Props> = ({ color, text }: Props) => {
  return (
    <h1 style={{ color }} className={styles.text}>
      {text}
    </h1>
  );
};

export default BodyTitleText;
