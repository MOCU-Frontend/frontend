import React from 'react';
import { AddressSearchData } from '../../../../../../store/Type/AddressSearch/AddressSearch';
import MyLocationEnrollmentAddressContent from '../Address/MyLocationEnrollmentAddressContent';
import styles from './MyLocationEnrollmentAddressList.module.css';

interface Props {
  addressSearchDataArr: AddressSearchData[];
  handleClickSearchAddress: (data: AddressSearchData) => void;
}

const MyLocationEnrollmentAddressList: React.FC<Props> = ({
  addressSearchDataArr,
  handleClickSearchAddress,
}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      {addressSearchDataArr.map((data) => (
        <MyLocationEnrollmentAddressContent
          onClick={() => handleClickSearchAddress(data)}
          titleText={data.road_address.building_name || data.address_name}
          subText={data.address_name}
        />
      ))}
    </div>
  );
};

export default MyLocationEnrollmentAddressList;
