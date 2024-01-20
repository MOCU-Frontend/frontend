import React from 'react';
import styles from './MyLocationListFilterTitleText.module.css';

interface Props {
  text: string;
  color: string;
  fontWeight: '400' | '500';
}

const MyLocationListFilterTitleText: React.FC<Props> = ({
  text,
  color,
  fontWeight,
}: Props) => {
  return (
    <h1 style={{ color, fontWeight }} className={styles.text}>
      {text}
    </h1>
  );
};

export default MyLocationListFilterTitleText;
