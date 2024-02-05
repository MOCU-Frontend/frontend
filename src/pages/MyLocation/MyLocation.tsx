import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationListFilter from '../../components/MyLocation/atoms/ListFilter/MyLocationListFilter';
import BodyTitleText from '../../components/Text/BodyTitleText/BodyTitleText';
import { useUserLocation } from '../../hooks/useUserLocation';
import useStore from '../../store/useStore';
import { colors } from '../../styles/colors';
import styles from './MyLocation.module.css';

const MyLocation: React.FC = () => {
  const navigate = useNavigate();

  const nowUserLocation = useStore((state) => state.nowUserLocation);
  const { locationArr, setLocationArr } = useUserLocation(nowUserLocation);
  const setNowUserLocation = useStore((state) => state.setNowUserLocation);

  const handleClickListFilter = (index: number) => {
    if (!locationArr[index]) throw new Error('invalid index!!');
    if (locationArr.findIndex((x) => x.isChecked) === -1)
      throw new Error('invalid index!!');
    setLocationArr((prevArr) => {
      const arrCopied = [...prevArr];
      const prevIndex = arrCopied.findIndex((x) => x.isChecked);
      arrCopied[prevIndex].isChecked = false;
      arrCopied[index].isChecked = true;
      return arrCopied;
    });
    setNowUserLocation(locationArr[index]);
  };
  return (
    <section className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='내 장소'
        onClickBackBtn={() => navigate(-1)}
      />
      <main className={styles.main}>
        <BodyTitleText
          text={`모쿠님은 현재 ${nowUserLocation.name}에 있어요.`}
          color='navy'
        />
        <MyLocationSettingBtn
          onClick={() => {}}
          text='현재 위치 재설정'
          color={colors.subPurplelight}
        />
        <div className={styles.listFiltersWrapper}>
          {locationArr.map((data, index) => (
            <MyLocationListFilter
              key={data.name + index}
              onClick={() => handleClickListFilter(index)}
              titleText={data.name}
              bodyText={data.address}
              isChecked={data.isChecked}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default MyLocation;
