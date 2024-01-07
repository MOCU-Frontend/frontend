import React from 'react';
import styles from './MapHeaderTitleText.module.css';

interface Props {
  text: string;
}

const MapHeaderTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MapHeaderTitleText;
