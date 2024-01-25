import React from 'react';
import styles from './OwnerRequestItemTitleText.module.css';

interface Props {
  text: string;
  color: string;
}

const OwnerRequestItemTitleText: React.FC<Props> = ({ text, color }: Props) => {
  return (
    <h1 className={styles.text} style={{ color }}>
      {text}
    </h1>
  );
};

export default OwnerRequestItemTitleText;
