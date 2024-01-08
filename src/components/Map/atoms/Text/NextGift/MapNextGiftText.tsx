import React from 'react';
import styles from './MapNextGiftText.module.css';

interface Props {
  text: string;
}

const MapNextGiftText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MapNextGiftText;
