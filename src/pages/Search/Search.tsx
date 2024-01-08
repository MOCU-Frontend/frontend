// Search.tsx

import React from 'react';
import styles from './Search.module.css';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../components/Button/Button';

const Search = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
            <HeaderBackBtn
            headerPaddingSize='search'
            onClickBackBtn={() => {}}
            >
              <SearchBar 
                placeholder='찾고 싶은 가게를 검색해 보세요'
                onClickSearchBtn={() => {}}
            />
            </HeaderBackBtn>
            
        </div>

        <div className = {styles.content_search_recent}>
          <div className = {styles.search_title}>최근 검색어</div>
          <Button
            size = 'medium'
            label = 'string'
          />
        </div>
    </div>
  );
};

export default Search;
