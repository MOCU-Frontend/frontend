import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationEditLinkBtn from '../../../../components/MyLocation/atoms/Btn/EditLink/MyLocationEditLinkBtn';
import MyLocationListFilter from '../../../../components/MyLocation/atoms/ListFilter/MyLocationListFilter';
import BodyTitleText from '../../../../components/Text/BodyTitleText/BodyTitleText';
import { useUserLocation } from '../../../../hooks/useUserLocation';
import useStore from '../../../../store/useStore';
import styles from './MyLocation.module.css';

const MyLocation: React.FC = () => {
  const navigate = useNavigate();
  const nowUserLocation = useStore((state) => state.nowUserLocation);
  const { locationArr, handleCheckedDataIndex } = useUserLocation();
  const setNowUserLocation = useStore((state) => state.setNowUserLocation);
  const handleClickListFilter = (index: number) => {
    const checkedLocationIdx = locationArr.findIndex((x) => x.isChecked);
    handleCheckedDataIndex(checkedLocationIdx, index);
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
          text={`모쿠님은 현재 ${nowUserLocation?.name}에 있어요.`}
          color='navy'
        />
        <div className={styles.editLinkBtnWrapper}>
          <MyLocationEditLinkBtn onClick={() => navigate('/my/location')} />
        </div>
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

export { MyLocation as Component };
