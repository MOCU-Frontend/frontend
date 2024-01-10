import React from 'react';
import styles from './HomeBottomNavigationText.module.css';

interface Props {
  text: string;
  color: string;
}

const HomeBottomNavigationText: React.FC<Props> = ({ text, color }: Props) => {
  return (
    <p style={{ color }} className={styles.text}>
      {text}
    </p>
  );
};

export default HomeBottomNavigationText;
