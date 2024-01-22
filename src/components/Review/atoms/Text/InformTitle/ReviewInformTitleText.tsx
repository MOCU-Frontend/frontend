import React from 'react';
import styles from './ReviewInformTitleText.module.css';

interface Props {
  text: string;
}

const ReviewInformTitleText: React.FC<Props> = ({ text }: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default ReviewInformTitleText;
