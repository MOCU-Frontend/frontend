import React, { useState } from 'react';
import styles from './SearchResult.module.css';
import { useNavigate } from 'react-router-dom';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import StoreInfo from '../../components/SearchResult/atoms/StoreInfo/StoreInfo';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import BottomSheetStory from '../../components/BottomSheet/BottomSheetStory';

type CheckFilterLabel = {
  title: string;
};

const CheckFilterLabelData: CheckFilterLabel[] = [
  {
    title: '거리순',
  },
  {
    title: '업종',
  },
  {
    title: '이벤트',
  },
  {
    title: '쿠폰 사용 임박',
  },
  {
    title: '적립 진행 중만',
  },
  {
    title: '안 가본 곳만',
  },
];

type StoreData = {
  title: string;
  couponCount: number;
  achieve: string;
  distance: number;
};

const searchResultData: StoreData[] = [
  {
    title: '크림베이글 건대점',
    couponCount: 9,
    achieve: '아이스 아메리카노',
    distance: 150,
  },
  {
    title: '카페 안즈',
    couponCount: 9,
    achieve: '아이스 아메리카노',
    distance: 150,
  },
  {
    title: '에이투비',
    couponCount: 10,
    achieve: '크로플',
    distance: 150,
  },
  {
    title: '브런치카페',
    couponCount: 10,
    achieve: '샌드위치',
    distance: 150,
  },
  {
    title: '카페 아르무아',
    couponCount: 0,
    achieve: '아메리카노',
    distance: 150,
  },
];

const SearchResult = () => {
  const navigate = useNavigate();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleFilterSelectClick = () => {
    setIsBottomSheetVisible(true);
  };

  const handleDragBottom = () => {
    setIsBottomSheetVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn
          headerPaddingSize="search"
          onClickBackBtn={() => navigate(-1)}
        >
          <SearchBar
            placeholder="찾고 싶은 가게를 검색해 보세요"
            onClickSearchBtn={() => {}}
          />
        </HeaderBackBtn>
      </div>

      <div className={styles.filtersWrapper}>
        {CheckFilterLabelData.map((data, index) => (
          <CheckFilterSelect
            isChecked={false}
            label={data.title}
            size="small"
            border={1}
            borderColor="sub-purple-light"
            borderRadius="large"
            onClick={handleFilterSelectClick}
          />
        ))}
      </div>

      <div className={styles.wrapContent}>
        {searchResultData.map((data, index) => (
          <StoreInfo
            key={index}
            title={data.title}
            couponCount={data.couponCount}
            achieve={data.achieve}
            distance={data.distance}
          />
        ))}
      </div>

      {isBottomSheetVisible && (
        <BottomSheet onDragBottom={handleDragBottom}>
          <BottomSheetStory onDragBottom={handleDragBottom} />
        </BottomSheet>
      )}
    </div>
  );
};

export default SearchResult;
