import React from 'react';
import styles from './SlideMenuTabBtnText.module.css';

interface Props {
  text: string;
}

const SlideMenuTabBtnText: React.FC<Props> = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default SlideMenuTabBtnText;
