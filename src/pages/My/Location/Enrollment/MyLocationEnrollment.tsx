import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationEnrollmentAddressList from '../../../../components/My/Location/Enrollment/Content/AddressList/MyLocationEnrollmentAddressList';
import FullSearchBar from '../../../../components/SearchBar/FullSearchBar/FullSearchBar';
import {
  AddressSearchData,
  AddressSearchWholeData,
} from '../../../../store/Type/AddressSearch/AddressSearch';
import { colors } from '../../../../styles/colors';
import styles from './MyLocationEnrollment.module.css';
interface Props {}

const MyLocationEnrollment: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  const [addressSearchWholeData, setAddressSearchData] = useState<
    AddressSearchWholeData | undefined
  >();
  useEffect(() => {
    fetch('http://localhost:3000/data/address-dummy-02.json')
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .then((data) => {
        setAddressSearchData(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='장소 등록'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.searchBarWrapper}>
        <FullSearchBar
          onClickSearchBtn={(text: string) => {}}
          placeholder={'지번, 도로명, 건물명으로 검색'}
        />
      </div>
      <div className={styles.myLocationSettingBtnWrapper}>
        <MyLocationSettingBtn
          onClick={() => {}}
          text='현재 위치로 설정'
          color={colors.subPurplelight}
        />
      </div>
      {addressSearchWholeData && (
        <MyLocationEnrollmentAddressList
          addressSearchDataArr={
            addressSearchWholeData ? addressSearchWholeData.documents : []
          }
          handleClickSearchAddress={(data: AddressSearchData) => {}}
        />
      )}
    </div>
  );
};

export default MyLocationEnrollment;
