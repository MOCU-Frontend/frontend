import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import MyLocationSettingBtn from '../../../../components/My/Location/atoms/Button/Setting/MyLocationSettingBtn';
import FullSearchBar from '../../../../components/SearchBar/FullSearchBar/FullSearchBar';
import { colors } from '../../../../styles/colors';
import styles from './MyLocationEnrollment.module.css';

interface Props {}

const MyLocationEnrollment: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='장소 등록'
        onClickBackBtn={() => navigate(-1)}
      />
      <div className={styles.searchBarWrapper}>
        <FullSearchBar
          onClickSearchBtn={(text: string) => {}}
          placeholder={'지번, 도로명, 건물명으로 검색'}
        />
      </div>
      <div className={styles.myLocationSettingBtnWrapper}>
        <MyLocationSettingBtn
          onClick={() => {}}
          text='현재 위치로 설정'
          color={colors.subPurplelight}
        />
      </div>
    </div>
  );
};

export default MyLocationEnrollment;
