// Search.tsx

import React from 'react';
import styles from './Search.module.css';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterWithXBtn from './../../components/CheckFilter/CheckFilterWithXBtn/CheckFilterWithXBtn';
import Card from '../../components/StoreSearch/atoms/Card/Card';
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
              title="로보카페"
              couponAvailable={3}
              farFrom={83}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title="로보카페"
              couponAvailable={3}
              farFrom={83}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title="크림베이글 건대점"
              couponAvailable={3}
              farFrom={83}
            />
            <Card
              couponMain={false}
              eventOn={false}
              title="버거킹 건대점"
              couponAvailable={1}
              farFrom={55}
            />
          </div>
        </div>

        <div className={styles.searchCarousel} />

        <div className={styles.contentRecent}>
          <div className={styles.searchTitle}>쿠폰 사용 임박!</div>
          <div className={styles.cardWrapper}>
            <Card
              couponMain={true}
              title="석촌카페 아현점"
              couponAvailable={9}
              farFrom={83}
            />
            <Card
              couponMain={true}
              title="크림베이글 건대점"
              couponAvailable={8}
              farFrom={87}
            />
            <Card
              couponMain={true}
              title="롯데리아 건대점"
              couponAvailable={7}
              farFrom={55}
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
              title="로보카페"
              couponAvailable={3}
              farFrom={83}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title="로보카페"
              couponAvailable={3}
              farFrom={83}
            />
            <Card
              couponMain={false}
              eventOn={true}
              title="크림베이글 건대점"
              couponAvailable={3}
              farFrom={83}
            />
            <Card
              couponMain={false}
              eventOn={false}
              title="버거킹 건대점"
              couponAvailable={1}
              farFrom={55}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
