import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import MyLocationListFilter from '../../components/MyLocation/atoms/ListFilter/MyLocationListFilter';
import BodyTitleText from '../../components/Text/BodyTitleText/BodyTitleText';
import { colors } from '../../styles/colors';
import styles from './MyLocation.module.css';

type Location = {
  title: string;
  address: string;
  isChecked: boolean;
};

const MyLocation: React.FC = () => {
  const navigate = useNavigate();
  const [locationArr, setLocationArr] = useState<Location[]>([
    { title: '학교', address: '서울 광진구 능동로 120', isChecked: true },
    { title: '집', address: '서울 광진구 아차산로 225', isChecked: false },
  ]);
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
  };
  return (
    <section className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='내 장소'
        onClickBackBtn={() => navigate(-1)}
      />
      <main className={styles.main}>
        <BodyTitleText text='모쿠님은 현재 학교에 있어요.' color='navy' />
        <MyLocationSettingBtn
          onClick={() => navigate('now')}
          text='현재 위치 재설정'
          color={colors.subPurplelight}
        />
        <div className={styles.listFiltersWrapper}>
          {locationArr.map((data, index) => (
            <MyLocationListFilter
              key={data.title + index}
              onClick={() => handleClickListFilter(index)}
              titleText={data.title}
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
