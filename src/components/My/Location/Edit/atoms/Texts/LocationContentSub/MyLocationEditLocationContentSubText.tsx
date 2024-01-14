import React from 'react';
import styles from './MyLocationEditLocationContentSubText.module.css';

interface Props {
  text: string;
}

const MyLocationEditLocationContentSubText: React.FC<Props> = ({
  text,
}: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyLocationEditLocationContentSubText;
