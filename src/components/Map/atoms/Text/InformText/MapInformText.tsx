import React from 'react';
import styles from './MapInformText.module.css';

interface Props {
  text: string;
}

const MapInformText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MapInformText;
