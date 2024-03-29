import React from 'react';
import { useNavigate } from 'react-router-dom';
import FullBtn from '../../../../../components/Button/FullBtn/FullBtn';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../../../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationLocEditContent from '../../../../../components/My/Location/atoms/Content/LocEdit/MyLocationLocEditContent';
import BodyTitleText from '../../../../../components/Text/BodyTitleText/BodyTitleText';
import { useUserLocation } from '../../../../../hooks/useUserLocation';
import useStore from '../../../../../store/useStore';
import { colors } from '../../../../../styles/colors';
import styles from './MyLocation.module.css';

const MyLocation = () => {
  const navigate = useNavigate();
  const nowAddress = useStore((state) => state.nowAddress);

  const { locationArr } = useUserLocation();
  return (
    <section className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='내 장소'
        onClickBackBtn={() => navigate(-1)}
      />
      <main className={styles.main}>
        <BodyTitleText
          text={
            nowAddress
              ? `모쿠님은 현재 ${nowAddress.road || nowAddress.jibun}에 있어요.`
              : '현재 위치를 등록해주세요.'
          }
          color='navy'
        />
        <div className={styles.settingBtnWrapper}>
          <MyLocationSettingBtn
            onClick={() => navigate('now')}
            text='현재 위치 재설정'
            color={colors.mainPurple}
          />
        </div>
        {locationArr &&
          locationArr.map((data, index) => (
            <MyLocationLocEditContent
              key={data.name + index}
              titleText={data.name}
              locationText={data.address}
              onClickBtn={() => navigate(`${data.addressId}`)}
            />
          ))}
      </main>
      <div className={styles.bottomBtnWrapper}>
        <FullBtn
          label='새로운 장소 등록하기'
          onClick={() => navigate('enrollment')}
        />
      </div>
    </section>
  );
};

export { MyLocation as Component };
