import React from 'react';
import styles from './MyLocationEnrollmentAddressContentSubText.module.css';

interface Props {
  text: string;
}

const MyLocationEnrollmentAddressContentSubText: React.FC<Props> = ({
  text,
}: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default MyLocationEnrollmentAddressContentSubText;
