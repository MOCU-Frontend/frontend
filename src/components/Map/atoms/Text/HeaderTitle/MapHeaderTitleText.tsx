import React from 'react';
import styles from './MapHeaderTitleText.module.css';

interface Props {
  text: string;
  color: string;
  size: 'small' | 'medium';
}

const MapHeaderTitleText: React.FC<Props> = ({ text, color, size }: Props) => {
  return (
    <h1
      className={styles.text}
      style={{ color, fontSize: size === 'small' ? '16px' : '20px' }}
    >
      {text}
    </h1>
  );
};

export default MapHeaderTitleText;
