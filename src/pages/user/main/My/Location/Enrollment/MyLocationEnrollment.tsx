import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullBtn from '../../../../../../components/Button/FullBtn/FullBtn';
import HeaderBackBtn from '../../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../../../../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationEditSeeMapBtn from '../../../../../../components/My/Location/Edit/atoms/Buttons/SeeMap/MyLocationEditSeeMapBtn';
import MyLocationEditDetailContent from '../../../../../../components/My/Location/Edit/atoms/Contents/Detail/MyLocationEditDetailContent';
import MyLocationEditLocContent from '../../../../../../components/My/Location/Edit/atoms/Contents/Location/MyLocationLocEditContent';
import MyLocationEditLocSetContent from '../../../../../../components/My/Location/Edit/atoms/Contents/LocSet/MyLocationEditLocSetContent';
import MyLocationEnrollmentAddressList from '../../../../../../components/My/Location/Enrollment/Content/AddressList/MyLocationEnrollmentAddressList';
import FullSearchBar from '../../../../../../components/SearchBar/FullSearchBar/FullSearchBar';
import { AddressSearchData } from '../../../../../../store/Type/AddressSearch/AddressSearch';
import { colors } from '../../../../../../styles/colors';
import styles from './MyLocationEnrollment.module.css';
import { ReactComponent as HomeIcon } from '../../../../../../assets/icon/home.svg';
import { ReactComponent as CompanyIcon } from '../../../../../../assets/icon/company.svg';
import { ReactComponent as SchoolIcon } from '../../../../../../assets/icon/school.svg';
import { ReactComponent as MarkerIcon } from '../../../../../../assets/icon/mapMarkerRegularSolid.svg';
import useStore from '../../../../../../store/useStore';
import { useMyLocationEnrollmentQuery } from '../../../../../../apis/my/Location/Enrollment/useMyLocationEnrollmentQuery';
import { useLocSetSelect } from '../../../../../../hooks/useLocSetSelect';
import { useMyLocationEnrollmentMutation } from '../../../../../../apis/my/Location/Enrollment/useMyLocationEnrollmentMutation';

type Address = {
  jibun: string;
  road: string;
  buildingName: string | undefined;
};
const MyLocationEnrollment: React.FC = () => {
  const navigate = useNavigate();

  const [selectedAddressData, setSelectedAddressData] = useState<
    Address | undefined
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
    checkedLocSetData,
    handleClickLocSetBtn,
    handleChangeCheckedDataEtcName,
  } = useLocSetSelect([
    { name: '집', Icon: HomeIcon, isChecked: true },
    { name: '회사', Icon: CompanyIcon, isChecked: false },
    { name: '학교', Icon: SchoolIcon, isChecked: false },
    { name: '기타', Icon: MarkerIcon, isChecked: false, etcName: '' },
  ]);

  const nowAddress = useStore((state) => state.nowAddress);
  const userId = useStore((state) => state.userId);

  const { addressPostMutation } = useMyLocationEnrollmentMutation(userId, () =>
    navigate('/')
  );
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
              onClickSearchBtn={(text: string) => {
                text && handleSearchLocation(text);
              }}
              placeholder={'지번, 도로명, 건물명으로 검색'}
            />
          </div>
          <div className={styles.myLocationSettingBtnWrapper}>
            <MyLocationSettingBtn
              onClick={() => {
                setSelectedAddressData(nowAddress);
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
                setSelectedAddressData({
                  jibun: data.address ? data.address.address_name : '',
                  road: data.road_address
                    ? data.road_address.address_name +
                      ' ' +
                      (data.road_address.building_name || '')
                    : '',
                  buildingName: data.road_address
                    ? data.road_address.building_name || ''
                    : '',
                })
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
                selectedAddressData.buildingName ||
                selectedAddressData.road ||
                selectedAddressData.jibun
              }
              subText={selectedAddressData.road || selectedAddressData.jibun}
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
            <MyLocationEditSeeMapBtn
              onClick={() => navigate('/my/location/now')}
            />
          </div>
          <div className={styles.fullBtnWrapper}>
            <FullBtn
              label='등록 완료하기'
              onClick={() => {
                if (checkedLocSetData && selectedAddressData) {
                  addressPostMutation.mutate({
                    name: checkedLocSetData.etcName || checkedLocSetData.name,
                    address: detailLocation
                      ? (selectedAddressData.road ||
                          selectedAddressData.jibun) +
                        ' ' +
                        detailLocation
                      : selectedAddressData.road || selectedAddressData.jibun,
                    latitude: 37.5416096016,
                    longitude: 127.07875583,
                  });
                }
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export { MyLocationEnrollment as Component };
