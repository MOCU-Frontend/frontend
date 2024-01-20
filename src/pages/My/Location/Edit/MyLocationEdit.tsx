import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FullBtn from '../../../../components/Button/FullBtn/FullBtn';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationEditDetailContent from '../../../../components/My/Location/Edit/atoms/Contents/Detail/MyLocationEditDetailContent';
import MyLocationEditLocContent from '../../../../components/My/Location/Edit/atoms/Contents/Location/MyLocationLocEditContent';
import MyLocationEditLocSetContent from '../../../../components/My/Location/Edit/atoms/Contents/LocSet/MyLocationEditLocSetContent';
import styles from './MyLocationEdit.module.css';
import { ReactComponent as HomeIcon } from '../../../../assets/icon/home.svg';
import { ReactComponent as CompanyIcon } from '../../../../assets/icon/company.svg';
import { ReactComponent as SchoolIcon } from '../../../../assets/icon/school.svg';
import { ReactComponent as MarkerIcon } from '../../../../assets/icon/mapMarkerRegularSolid.svg';
import MyLocationEditSeeMapBtn from '../../../../components/My/Location/Edit/atoms/Buttons/SeeMap/MyLocationEditSeeMapBtn';
type LocSetData = {
  name: '집' | '회사' | '학교' | '기타';
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isChecked: boolean;
  etcName?: string;
};
const MyLocationEdit: React.FC = () => {
  const { locationId } = useParams();
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

  const navigate = useNavigate();
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
        <MyLocationEditSeeMapBtn onClick={() => {}} />
      </div>
      <div className={styles.fullBtnWrapper}>
        <FullBtn label='수정 완료하기' onClick={() => {}} />
      </div>
    </>
  );
};

export default MyLocationEdit;
