import React from 'react';
import styles from './MyLocationEnrollmentAddressContentTitleText.module.css';

interface Props {
  text: string;
}

const MyLocationEnrollmentAddressContentTitleText: React.FC<Props> = ({
  text,
}: Props) => {
  return <h1 className={styles.text}>{text}</h1>;
};

export default MyLocationEnrollmentAddressContentTitleText;
