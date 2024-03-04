import React, { useState } from 'react';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationEditDetailContent from '../../../../../components/My/Location/Edit/atoms/Contents/Detail/MyLocationEditDetailContent';
import MyLocationEditLocSetContent from '../../../../../components/My/Location/Edit/atoms/Contents/LocSet/MyLocationEditLocSetContent';
import BodyTitleText from '../../../../../components/Text/BodyTitleText/BodyTitleText';
import { colors } from '../../../../../styles/colors';
import styles from './LocationSettingName.module.css';
import { ReactComponent as HomeIcon } from '../../../../../assets/icon/home.svg';
import { ReactComponent as CompanyIcon } from '../../../../../assets/icon/company.svg';
import { ReactComponent as SchoolIcon } from '../../../../../assets/icon/school.svg';
import { ReactComponent as MarkerIcon } from '../../../../../assets/icon/mapMarkerRegularSolid.svg';
import MyNowLocationBottomSheet from '../../../../../components/My/Location/Now/atoms/BottomSheet/MyNowLocationBottomSheet';
import { useNavigate } from 'react-router-dom';
import { useLocSetSelect } from '../../../../../hooks/useLocSetSelect';

const LocationSettingName: React.FC = () => {
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
  const navigate = useNavigate();
  return (
    <>
      <HeaderBackBtn backBtnGap={2} onClickBackBtn={() => navigate(-1)}>
        <p className={styles.backBtnText}>이전</p>
      </HeaderBackBtn>
      <div className={styles.titleTextWrapper}>
        <BodyTitleText
          text='해당 위치의 별칭을 정해주세요.'
          color={colors.black}
        />
      </div>
      <div className={styles.mainContentWrapper}>
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
      <MyNowLocationBottomSheet
        onDragBottom={() => navigate(-1)}
        locationText={'no address..'}
        btnStatus='지번'
        handleChangeBtnStatus={() => {}}
        handleClickSetLocationBtn={() => {}}
        btnText='별칭 설정 완료'
      />
    </>
  );
};

export { LocationSettingName as Component };
