import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyLocationEditSeeMapBtn from '../../components/My/Location/Edit/atoms/Buttons/SeeMap/MyLocationEditSeeMapBtn';
import MyNowLocationBottomSheet from '../../components/My/Location/Now/atoms/BottomSheet/MyNowLocationBottomSheet';
import SearchBar from '../../components/SearchBar/SearchBar';
import BodyTitleText from '../../components/Text/BodyTitleText/BodyTitleText';
import { colors } from '../../styles/colors';
import styles from './LocationSetting.module.css';

interface Props {}

const LocationSetting: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.titleTextWrapper}>
        <BodyTitleText
          text='모쿠 님이 자주 사용할 위치를 한 곳 설정해주세요!'
          color={colors.black}
        />
      </div>
      <div
        className={styles.searchBarWrapper}
        onClick={() => navigate('search')}
      >
        <SearchBar
          placeholder='지번, 도로명, 건물명으로 검색'
          onClickSearchBtn={() => {}}
        />
      </div>
      <div className={styles.mapWrapper} onClick={() => navigate('now')}>
        <div className={styles.mapSmall}></div>
      </div>
      <div className={styles.seeMapBtnWrapper}>
        <MyLocationEditSeeMapBtn onClick={() => navigate('now')} />
      </div>
      <MyNowLocationBottomSheet
        onDragBottom={() => navigate(-1)}
        locationText={'no address..'}
        btnStatus='지번'
        handleChangeBtnStatus={() => {}}
        handleClickSetLocationBtn={() => navigate('name')}
      />
    </>
  );
};

export default LocationSetting;
