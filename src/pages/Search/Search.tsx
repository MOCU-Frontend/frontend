// Search.tsx

import React from 'react';
import styles from './Search.module.css';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterWithXBtn from './../../components/CheckFilter/CheckFilterWithXBtn/CheckFilterWithXBtn';
import Card from '../../components/StoreSearch/atoms/Card/Card';

type StoreData = {
  title: string;
  couponAvailable: number;
  farFrom: number;
};

const storeSearchData: StoreData[] = [
  {
    title: '로보카페',
    couponAvailable: 3,
    farFrom: 83,
  },
  {
    title: '크림베이글 건대점',
    couponAvailable: 7,
    farFrom: 105,
  },
  {
    title: '롯데리아 건대점',
    couponAvailable: 5,
    farFrom: 67,
  },
  {
    title: '가츠시',
    couponAvailable: 8,
    farFrom: 132,
  },
];

const Search = () => {
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
      <div className={styles.contentWrapper}>
        <div className={styles.contentRecent}>
          <div className={styles.searchTitle}>최근 검색어</div>
          <div className={styles.filtersWrapper}>
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label="베이글"
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label="스터디카페"
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label="도넛"
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label="대학로"
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label="건대입구"
            />
          </div>
        </div>

        <div className={styles.contentRecent}>
          <div className={styles.searchTitle}>최근 방문한 가게</div>
          <div className={styles.cardWrapper}>
            <Card
              couponMain={false}
              eventOn={false}
              title={storeSearchData[0].title}
              couponAvailable={storeSearchData[0].couponAvailable}
              farFrom={storeSearchData[0].farFrom}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[1].title}
              couponAvailable={storeSearchData[1].couponAvailable}
              farFrom={storeSearchData[1].farFrom}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[2].title}
              couponAvailable={storeSearchData[2].couponAvailable}
              farFrom={storeSearchData[2].farFrom}
            />
            <Card
              couponMain={false}
              eventOn={false}
              title={storeSearchData[3].title}
              couponAvailable={storeSearchData[3].couponAvailable}
              farFrom={storeSearchData[3].farFrom}
            />
          </div>
        </div>

        <div className={styles.searchCarousel} />

        <div className={styles.contentRecent}>
          <div className={styles.searchTitle}>쿠폰 사용 임박!</div>
          <div className={styles.cardWrapper}>
            <Card
              couponMain={true}
              title={storeSearchData[3].title}
              couponAvailable={storeSearchData[3].couponAvailable}
              farFrom={storeSearchData[3].farFrom}
            />
            <Card
              couponMain={true}
              title={storeSearchData[1].title}
              couponAvailable={storeSearchData[1].couponAvailable}
              farFrom={storeSearchData[1].farFrom}
            />
            <Card
              couponMain={true}
              title={storeSearchData[2].title}
              couponAvailable={storeSearchData[2].couponAvailable}
              farFrom={storeSearchData[2].farFrom}
            />
          </div>
        </div>

        <div className={styles.contentRecent}>
          <div className={styles.searchTitle}>
            모쿠님을 위한 맞춤 가게 추천{' '}
          </div>
          <div className={styles.cardWrapper}>
            <Card
              couponMain={false}
              eventOn={false}
              title={storeSearchData[0].title}
              couponAvailable={storeSearchData[0].couponAvailable}
              farFrom={storeSearchData[0].farFrom}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[1].title}
              couponAvailable={storeSearchData[1].couponAvailable}
              farFrom={storeSearchData[1].farFrom}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[2].title}
              couponAvailable={storeSearchData[2].couponAvailable}
              farFrom={storeSearchData[2].farFrom}
            />
            <Card
              couponMain={false}
              eventOn={false}
              title={storeSearchData[3].title}
              couponAvailable={storeSearchData[3].couponAvailable}
              farFrom={storeSearchData[3].farFrom}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
