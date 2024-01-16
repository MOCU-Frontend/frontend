import React from 'react';
import styles from './MyLocationEnrollmentAddressContent.module.css';
import MyLocationEnrollmentAddressContentTitleText from '../../atoms/Text/AddressContentTitle/MyLocationEnrollmentAddressContentTitleText';
import MyLocationEnrollmentAddressContentSubText from '../../atoms/Text/AddressContentSub/MyLocationEnrollmentAddressContentSubText';
interface Props {
  titleText: string;
  subText: string;
  onClick: () => void;
}

const MyLocationEnrollmentAddressContent: React.FC<Props> = ({
  titleText,
  subText,
  onClick,
}: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <MyLocationEnrollmentAddressContentTitleText text={titleText} />
      <MyLocationEnrollmentAddressContentSubText text={subText} />
    </button>
  );
};

export default MyLocationEnrollmentAddressContent;
