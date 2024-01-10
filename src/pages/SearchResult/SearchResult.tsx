import React from 'react';
import styles from './SearchResult.module.css';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';

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
    </div>
  );
};

export default SearchResult;
