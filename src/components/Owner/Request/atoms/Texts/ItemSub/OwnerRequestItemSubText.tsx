import React from 'react';
import styles from './OwnerRequestItemSubText.module.css';

interface Props {
  text: string;
  color: string;
}

const OwnerRequestItemSubText: React.FC<Props> = ({ text, color }: Props) => {
  return (
    <p className={styles.text} style={{ color }}>
      {text}
    </p>
  );
};

export default OwnerRequestItemSubText;
