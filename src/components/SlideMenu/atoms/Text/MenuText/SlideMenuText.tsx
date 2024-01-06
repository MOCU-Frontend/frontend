import React from 'react';
import styles from './SlideMenuText.module.css';
interface Props {
  text: string;
}

const SlideMenuText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default SlideMenuText;
