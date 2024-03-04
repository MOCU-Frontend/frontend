import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FullBtn from '../../../../../../components/Button/FullBtn/FullBtn';
import HeaderBackBtn from '../../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationEditDetailContent from '../../../../../../components/My/Location/Edit/atoms/Contents/Detail/MyLocationEditDetailContent';
import MyLocationEditLocContent from '../../../../../../components/My/Location/Edit/atoms/Contents/Location/MyLocationLocEditContent';
import MyLocationEditLocSetContent from '../../../../../../components/My/Location/Edit/atoms/Contents/LocSet/MyLocationEditLocSetContent';
import styles from './MyLocationEdit.module.css';
import { ReactComponent as HomeIcon } from '../../../../../../assets/icon/home.svg';
import { ReactComponent as CompanyIcon } from '../../../../../../assets/icon/company.svg';
import { ReactComponent as SchoolIcon } from '../../../../../../assets/icon/school.svg';
import { ReactComponent as MarkerIcon } from '../../../../../../assets/icon/mapMarkerRegularSolid.svg';
import MyLocationEditSeeMapBtn from '../../../../../../components/My/Location/Edit/atoms/Buttons/SeeMap/MyLocationEditSeeMapBtn';
import useStore from '../../../../../../store/useStore';
import { useLocSetSelect } from '../../../../../../hooks/useLocSetSelect';
import { useMyLocationEditMutation } from '../../../../../../apis/my/Location/Edit/useMyLocationEditMutation';

const MyLocationEdit: React.FC = () => {
  const { locationId } = useParams();
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

  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);

  const { addressPatchMutation } = useMyLocationEditMutation(
    userId,
    locationId,
    () => navigate('/')
  );
  return (
    <>
      <HeaderBackBtn
        headerTitle='장소 수정'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.bodyWrapper}>
        <MyLocationEditLocContent
          titleText='서울 광진구 능동로 69'
          subText='서울 광진구 능동로 69'
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
        <MyLocationEditSeeMapBtn onClick={() => navigate('/my/location/now')} />
      </div>
      <div className={styles.fullBtnWrapper}>
        {/* TODO: 주소 수정에서 주소 받아오기 추가 */}
        <FullBtn
          label='수정 완료하기'
          onClick={() => {
            if (checkedLocSetData) {
              addressPatchMutation.mutate({
                name: checkedLocSetData.etcName || checkedLocSetData.name,
                address: '서울 광진구 능동로 69',
                latitude: 37.541609601,
                longitude: 127.07875583,
              });
            }
          }}
        />
      </div>
    </>
  );
};

export { MyLocationEdit as Component };
