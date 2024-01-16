import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullBtn from '../../../../components/Button/FullBtn/FullBtn';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationEditSeeMapBtn from '../../../../components/My/Location/Edit/atoms/Buttons/SeeMap/MyLocationEditSeeMapBtn';
import MyLocationEditDetailContent from '../../../../components/My/Location/Edit/atoms/Contents/Detail/MyLocationEditDetailContent';
import MyLocationEditLocContent from '../../../../components/My/Location/Edit/atoms/Contents/Location/MyLocationLocEditContent';
import MyLocationEditLocSetContent from '../../../../components/My/Location/Edit/atoms/Contents/LocSet/MyLocationEditLocSetContent';
import MyLocationEnrollmentAddressList from '../../../../components/My/Location/Enrollment/Content/AddressList/MyLocationEnrollmentAddressList';
import FullSearchBar from '../../../../components/SearchBar/FullSearchBar/FullSearchBar';
import {
  AddressSearchData,
  AddressSearchWholeData,
} from '../../../../store/Type/AddressSearch/AddressSearch';
import { colors } from '../../../../styles/colors';
import styles from './MyLocationEnrollment.module.css';
import { ReactComponent as HomeIcon } from '../../../../assets/icon/home.svg';
import { ReactComponent as CompanyIcon } from '../../../../assets/icon/company.svg';
import { ReactComponent as SchoolIcon } from '../../../../assets/icon/school.svg';
import { ReactComponent as MarkerIcon } from '../../../../assets/icon/mapMarkerRegularSolid.svg';
type LocSetData = {
  name: '집' | '회사' | '학교' | '기타';
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isChecked: boolean;
  etcName?: string;
};
const MyLocationEnrollment: React.FC = () => {
  const navigate = useNavigate();
  const [addressSearchWholeData, setAddressSearchData] = useState<
    AddressSearchWholeData | undefined
  >();
  const [selectedAddressData, setSelectedAddressData] = useState<
    AddressSearchData | undefined
  >();
  useEffect(() => {
    fetch('http://localhost:3000/data/address-dummy-01.json')
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

  const [detailLocation, setDetailLocation] = useState('');
  const [locSetDataArr, setLocSetDataArr] = useState<LocSetData[]>([
    { name: '집', Icon: HomeIcon, isChecked: true },
    { name: '회사', Icon: CompanyIcon, isChecked: false },
    { name: '학교', Icon: SchoolIcon, isChecked: false },
    { name: '기타', Icon: MarkerIcon, isChecked: false, etcName: '' },
  ]);
  const handleClickLocSetBtn = (index: number) => {
    if (!locSetDataArr[index]) throw new Error('invalid index!');
    setLocSetDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      const checkedIndex = copiedArr.findIndex((x) => x.isChecked);
      if (checkedIndex === -1) throw new Error('there is no checked data!!');
      copiedArr[checkedIndex].isChecked = false;
      copiedArr[index].isChecked = true;
      return copiedArr;
    });
  };
  const handleChangeCheckedDataEtcName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkedData = locSetDataArr.find((x) => x.isChecked);
    if (!checkedData) throw new Error('no checked loc set data!');
    if (checkedData.name !== '기타') throw new Error('no etc name data!');
    setLocSetDataArr((prevArr) => {
      const copiedArr = [...prevArr];
      copiedArr[3].etcName = e.target.value;
      return copiedArr;
    });
  };

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
              onClickSearchBtn={(text: string) => {}}
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
          {addressSearchWholeData && (
            <MyLocationEnrollmentAddressList
              addressSearchDataArr={
                addressSearchWholeData ? addressSearchWholeData.documents : []
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

export default MyLocationEnrollment;
