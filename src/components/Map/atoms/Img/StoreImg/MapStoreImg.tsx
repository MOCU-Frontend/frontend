import React from 'react';
import styles from './MapStoreImg.module.css';

interface Props {
  src: string;
  alt?: string;
}

const MapStoreImg: React.FC<Props> = ({ src, alt = 'img' }: Props) => {
  return <img src={src} alt={alt} className={styles.img} />;
};

export default MapStoreImg;
