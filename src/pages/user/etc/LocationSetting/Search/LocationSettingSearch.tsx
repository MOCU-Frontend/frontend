import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullBtn from '../../../../../components/Button/FullBtn/FullBtn';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../../../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationEditSeeMapBtn from '../../../../../components/My/Location/Edit/atoms/Buttons/SeeMap/MyLocationEditSeeMapBtn';
import MyLocationEditDetailContent from '../../../../../components/My/Location/Edit/atoms/Contents/Detail/MyLocationEditDetailContent';
import MyLocationEditLocContent from '../../../../../components/My/Location/Edit/atoms/Contents/Location/MyLocationLocEditContent';
import MyLocationEditLocSetContent from '../../../../../components/My/Location/Edit/atoms/Contents/LocSet/MyLocationEditLocSetContent';
import MyLocationEnrollmentAddressList from '../../../../../components/My/Location/Enrollment/Content/AddressList/MyLocationEnrollmentAddressList';
import FullSearchBar from '../../../../../components/SearchBar/FullSearchBar/FullSearchBar';
import { AddressSearchData } from '../../../../../store/Type/AddressSearch/AddressSearch';
import { colors } from '../../../../../styles/colors';
import styles from './LocationSettingSearch.module.css';
import { ReactComponent as HomeIcon } from '../../../../../assets/icon/home.svg';
import { ReactComponent as CompanyIcon } from '../../../../../assets/icon/company.svg';
import { ReactComponent as SchoolIcon } from '../../../../../assets/icon/school.svg';
import { ReactComponent as MarkerIcon } from '../../../../../assets/icon/mapMarkerRegularSolid.svg';
import { useLocSetSelect } from '../../../../../hooks/useLocSetSelect';
import { useMyLocationEnrollmentQuery } from '../../../../../apis/my/Location/Enrollment/useMyLocationEnrollmentQuery';

const LocationSettingSearch: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAddressData, setSelectedAddressData] = useState<
    AddressSearchData | undefined
  >();
  const [locSearchWord, setLocSearchWord] = useState('');
  const {
    myLocationEnrollmentLocQuery: { data: searchedLocData },
  } = useMyLocationEnrollmentQuery(locSearchWord);
  const handleSearchLocation = (locText: string) => {
    setLocSearchWord(locText);
  };
  const [detailLocation, setDetailLocation] = useState('');
  const {
    locSetDataArr,
    handleClickLocSetBtn,
    handleChangeCheckedDataEtcName,
  } = useLocSetSelect([
    { name: '집', Icon: HomeIcon, isChecked: true },
    { name: '회사', Icon: CompanyIcon, isChecked: false },
    { name: '학교', Icon: SchoolIcon, isChecked: false },
    { name: '기타', Icon: MarkerIcon, isChecked: false, etcName: '' },
  ]);

  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='장소 등록'
        onClickBackBtn={() => {
          if (selectedAddressData) {
            setSelectedAddressData(undefined);
          } else {
            navigate(-1);
          }
        }}
      />
      {!selectedAddressData && (
        <>
          <div className={styles.searchBarWrapper}>
            <FullSearchBar
              onClickSearchBtn={(text: string) => handleSearchLocation(text)}
              placeholder={'지번, 도로명, 건물명으로 검색'}
            />
          </div>
          <div className={styles.myLocationSettingBtnWrapper}>
            <MyLocationSettingBtn
              onClick={() => {
                navigate('/my/location/now');
              }}
              text='현재 위치로 설정'
              color={colors.subPurplelight}
            />
          </div>
          {searchedLocData && (
            <MyLocationEnrollmentAddressList
              addressSearchDataArr={
                searchedLocData ? searchedLocData.documents : []
              }
              handleClickSearchAddress={(data: AddressSearchData) =>
                setSelectedAddressData(data)
              }
            />
          )}
        </>
      )}
      {selectedAddressData && (
        <>
          <div className={styles.bodyWrapper}>
            <MyLocationEditLocContent
              titleText={
                selectedAddressData.road_address
                  ? selectedAddressData.road_address.building_name ||
                    selectedAddressData.address_name
                  : selectedAddressData.address_name
              }
              subText={selectedAddressData.address_name}
            />
            <MyLocationEditDetailContent
              value={detailLocation}
              handleChange={(e) => setDetailLocation(e.target.value)}
            />
            <MyLocationEditLocSetContent
              locSetDataArr={locSetDataArr}
              handleClickBtn={handleClickLocSetBtn}
              handleChangeCheckedDataEtcName={handleChangeCheckedDataEtcName}
            />
          </div>
          <div className={styles.seeMapBtnWrapper}>
            <MyLocationEditSeeMapBtn onClick={() => {}} />
          </div>
          <div className={styles.fullBtnWrapper}>
            <FullBtn label='수정 완료하기' onClick={() => {}} />
          </div>
        </>
      )}
    </div>
  );
};

export { LocationSettingSearch as Component };
