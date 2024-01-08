import React from 'react';
import styles from './MapBodySubText.module.css';

interface Props {
  text: string;
}

const MapBodySubText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MapBodySubText;
