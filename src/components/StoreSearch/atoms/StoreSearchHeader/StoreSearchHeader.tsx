import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StoreSearchHeader.module.css';

import { colors } from '../../../../styles/colors';

import MapHeaderSelect from '../../../Map/atoms/Select/HeaderSelect/MapHeaderSelect';
import HeaderBackBtn from '../../../HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../../SearchBar/SearchBar';
import useStore from '../../../../store/useStore';
import { RecentSearchData } from '../../../../store/data/storeSearch';

interface Props {
  handleAddSearchKeyword: (searchWord: RecentSearchData) => void;
}

const StoreSearchHeader: React.FC<Props> = ({
  handleAddSearchKeyword,
}: Props) => {
  const navigate = useNavigate();
  const nowUserLocation = useStore((state) => state.nowUserLocation);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.mapHeaderSelectWrapper}>
        <MapHeaderSelect
          text={nowUserLocation ? nowUserLocation.name : '현재 위치 없음'}
          onClick={() => navigate('/mylocation')}
          color={colors.black}
          size={'small'}
        />
      </div>

      <HeaderBackBtn
        headerPaddingSize='search'
        onClickBackBtn={() => navigate(-1)}
        children={
          <SearchBar
            placeholder='찾고 싶은 가게를 검색해 보세요'
            onClickSearchBtn={(value) => {
              if (value) {
                handleAddSearchKeyword({ title: value });
                navigate(`${value}`);
              }
            }}
          />
        }
      ></HeaderBackBtn>
    </div>
  );
};

export default StoreSearchHeader;
