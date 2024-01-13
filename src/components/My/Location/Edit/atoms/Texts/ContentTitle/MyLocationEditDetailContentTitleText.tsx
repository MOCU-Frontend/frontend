import React from 'react';
import styles from './MyLocationEditDetailContentTitleText.module.css';

interface Props {
  text: string;
}

const MyLocationEditDetailContentTitleText: React.FC<Props> = ({
  text,
}: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyLocationEditDetailContentTitleText;
