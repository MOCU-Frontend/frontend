import React from 'react';
import styles from './MapSearchBtnText.module.css';

interface Props {
  text: string;
}

const MapSearchBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MapSearchBtnText;
