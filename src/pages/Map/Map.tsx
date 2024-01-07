import React from 'react';
import styles from './Map.module.css';

interface Props {}

const Map: React.FC<Props> = ({}: Props) => {
  return <div className={styles.wrapper}>map</div>;
};

export default Map;
