import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullBtn from '../../../components/Button/FullBtn/FullBtn';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationLocEditContent from '../../../components/My/Location/atoms/Content/LocEdit/MyLocationLocEditContent';
import BodyTitleText from '../../../components/Text/BodyTitleText/BodyTitleText';
import styles from './MyLocation.module.css';

interface Props {}

const MyLocation: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <section className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='내 장소'
        onClickBackBtn={() => navigate(-1)}
      />
      <main className={styles.main}>
        <BodyTitleText
          text='모쿠님은 현재 
서울 광진구 아차산로 ...에 있어요.'
          color='navy'
        />
        <div className={styles.settingBtnWrapper}>
          <MyLocationSettingBtn onClick={() => {}} />
        </div>
        <MyLocationLocEditContent
          titleText='주소'
          locationText='서울 광진구 능동로 69'
          onClickBtn={() => {}}
        />
        <MyLocationLocEditContent
          titleText='학교'
          locationText='서울 광진구 능동로 120'
          onClickBtn={() => {}}
        />
      </main>
      <div className={styles.bottomBtnWrapper}>
        <FullBtn label='새로운 장소 등록하기' />
      </div>
    </section>
  );
};

export default MyLocation;
