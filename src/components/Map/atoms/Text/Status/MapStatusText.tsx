import React from 'react';
import styles from './MapStatusText.module.css';

interface Props {
  text: string;
}

const MapStatusText: React.FC<Props> = ({ text }: Props) => {
  return <div className={styles.text}>{text}</div>;
};

export default MapStatusText;
