// StoreSearch.tsx

import React from 'react';
import styles from './StoreSearch.module.css';
import { useNavigate, useParams } from 'react-router-dom';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterWithXBtn from '../../components/CheckFilter/CheckFilterWithXBtn/CheckFilterWithXBtn';
import Card from '../../components/StoreSearch/atoms/Card/Card';
import MapHeaderSelect from '../../components/Map/atoms/Select/HeaderSelect/MapHeaderSelect';
import { colors } from '../../styles/colors';

type StoreData = {
  title: string;
  couponCount: number;
  distance: number;
};

const storeSearchData: StoreData[] = [
  {
    title: '로보카페',
    couponCount: 3,
    distance: 83,
  },
  {
    title: '크림베이글 건대점',
    couponCount: 7,
    distance: 105,
  },
  {
    title: '롯데리아 건대점',
    couponCount: 5,
    distance: 67,
  },
  {
    title: '가츠시',
    couponCount: 8,
    distance: 132,
  },
];

const StoreSearch = () => {
  const { searchWord } = useParams();
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.mapHeaderSelectWrapper}>
        <MapHeaderSelect
          text='학교'
          onClick={() => navigate('/mylocation')}
          color={colors.black}
          size={'small'}
        />
      </div>

      <HeaderBackBtn
        headerPaddingSize='search'
        onClickBackBtn={() => navigate(-1)}
      >
        <SearchBar
          placeholder='찾고 싶은 가게를 검색해 보세요'
          onClickSearchBtn={(value) => navigate(`/storesearch/${value}`)}
        />
      </HeaderBackBtn>
      <div className={styles.contentWrapper}>
        <div className={styles.contentRecent}>
          <div className={styles.searchTitle}>최근 검색어</div>
          <div className={styles.filtersWrapper}>
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label='베이글'
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label='스터디카페'
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label='도넛'
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label='대학로'
            />
            <CheckFilterWithXBtn
              onClickContent={() => {}}
              onClickXBtn={() => {}}
              isChecked={false}
              label='건대입구'
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
              couponCount={storeSearchData[0].couponCount}
              distance={storeSearchData[0].distance}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[1].title}
              couponCount={storeSearchData[1].couponCount}
              distance={storeSearchData[1].distance}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[2].title}
              couponCount={storeSearchData[2].couponCount}
              distance={storeSearchData[2].distance}
            />
            <Card
              couponMain={false}
              eventOn={false}
              title={storeSearchData[3].title}
              couponCount={storeSearchData[3].couponCount}
              distance={storeSearchData[3].distance}
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
              couponCount={storeSearchData[3].couponCount}
              distance={storeSearchData[3].distance}
            />
            <Card
              couponMain={true}
              title={storeSearchData[1].title}
              couponCount={storeSearchData[1].couponCount}
              distance={storeSearchData[1].distance}
            />
            <Card
              couponMain={true}
              title={storeSearchData[2].title}
              couponCount={storeSearchData[2].couponCount}
              distance={storeSearchData[2].distance}
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
              couponCount={storeSearchData[0].couponCount}
              distance={storeSearchData[0].distance}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[1].title}
              couponCount={storeSearchData[1].couponCount}
              distance={storeSearchData[1].distance}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title={storeSearchData[2].title}
              couponCount={storeSearchData[2].couponCount}
              distance={storeSearchData[2].distance}
            />
            <Card
              couponMain={false}
              eventOn={false}
              title={storeSearchData[3].title}
              couponCount={storeSearchData[3].couponCount}
              distance={storeSearchData[3].distance}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
