import React from 'react';
import styles from './SearchResult.module.css';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import StoreInfo from '../../components/SearchResult/atoms/StoreInfo/StoreInfo';

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
    couponCount: 9,
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <HeaderBackBtn headerPaddingSize="search" onClickBackBtn={() => {}}>
          <SearchBar
            placeholder="찾고 싶은 가게를 검색해 보세요"
            onClickSearchBtn={() => {}}
          />
        </HeaderBackBtn>
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          isChecked={false}
          label="거리순"
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
        />
        <CheckFilterSelect
          isChecked={false}
          label="업종"
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
        />
        <CheckFilterSelect
          isChecked={false}
          label="이벤트"
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
        />
        <CheckFilterSelect
          isChecked={false}
          label="쿠폰 사용 임박"
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
        />
        <CheckFilterSelect
          isChecked={false}
          label="적립 진행 중만 "
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
        />
        <CheckFilterSelect
          isChecked={false}
          label="안 가본 곳만"
          size="small"
          border={1}
          borderColor="sub-purple-light"
          borderRadius="large"
        />
      </div>

      <div className={styles.wrapContent}>
        <StoreInfo
          title={searchResultData[0].title}
          couponCount={searchResultData[0].couponCount}
          achieve={searchResultData[0].achieve}
          distance={searchResultData[0].distance}
        />
        <StoreInfo
          title={searchResultData[1].title}
          couponCount={searchResultData[1].couponCount}
          achieve={searchResultData[1].achieve}
          distance={searchResultData[1].distance}
        />
        <StoreInfo
          title={searchResultData[2].title}
          couponCount={searchResultData[2].couponCount}
          achieve={searchResultData[2].achieve}
          distance={searchResultData[2].distance}
        />
        <StoreInfo
          title={searchResultData[3].title}
          couponCount={searchResultData[3].couponCount}
          achieve={searchResultData[3].achieve}
          distance={searchResultData[3].distance}
        />
        <StoreInfo
          title={searchResultData[4].title}
          couponCount={searchResultData[4].couponCount}
          achieve={searchResultData[4].achieve}
          distance={searchResultData[4].distance}
        />
        <StoreInfo
          title={searchResultData[4].title}
          couponCount={searchResultData[4].couponCount}
          achieve={searchResultData[4].achieve}
          distance={searchResultData[4].distance}
        />
        <StoreInfo
          title={searchResultData[4].title}
          couponCount={searchResultData[4].couponCount}
          achieve={searchResultData[4].achieve}
          distance={searchResultData[4].distance}
        />
        <StoreInfo
          title={searchResultData[4].title}
          couponCount={searchResultData[4].couponCount}
          achieve={searchResultData[4].achieve}
          distance={searchResultData[4].distance}
        />
        <StoreInfo
          title={searchResultData[4].title}
          couponCount={searchResultData[4].couponCount}
          achieve={searchResultData[4].achieve}
          distance={searchResultData[4].distance}
        />
        <StoreInfo
          title={searchResultData[4].title}
          couponCount={searchResultData[4].couponCount}
          achieve={searchResultData[4].achieve}
          distance={searchResultData[4].distance}
        />
      </div>
    </div>
  );
};

export default SearchResult;
