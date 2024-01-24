import React from 'react';
import styles from './OwnerInformEditCheckBoxText.module.css';

interface Props {
  text: string;
  color: string;
}

const OwnerInformEditCheckBoxText: React.FC<Props> = ({
  text,
  color,
}: Props) => {
  return (
    <p className={styles.text} style={{ color }}>
      {text}
    </p>
  );
};

export default OwnerInformEditCheckBoxText;
