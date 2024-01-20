import React from 'react';
import styles from './MyLocationListFilterBodyText.module.css';

interface Props {
  text: string;
  color: string;
}

const MyLocationListFilterBodyText: React.FC<Props> = ({
  text,
  color,
}: Props) => {
  return (
    <p style={{ color }} className={styles.text}>
      {text}
    </p>
  );
};

export default MyLocationListFilterBodyText;
