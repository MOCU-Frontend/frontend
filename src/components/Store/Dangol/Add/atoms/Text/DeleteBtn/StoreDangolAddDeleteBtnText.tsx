import React from 'react';
import styles from './StoreDangolAddDeleteBtnText.module.css';

interface Props {
  text: string;
  color: string;
}

const StoreDangolAddDeleteBtnText: React.FC<Props> = ({
  text,
  color,
}: Props) => {
  return (
    <p className={styles.text} style={{ color }}>
      {text}
    </p>
  );
};

export default StoreDangolAddDeleteBtnText;
