// Search.tsx

import React from 'react';
import styles from './Search.module.css';

import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckFilterWithXBtn from './../../components/CheckFilter/CheckFilterWithXBtn/CheckFilterWithXBtn';

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
          <div className = {styles.filtersWrapper}>
            <CheckFilterWithXBtn
              onClickContent = {() => {}}
              onClickXBtn={() => {}}
              isChecked = {false}
              label = '베이글'
            />
            <CheckFilterWithXBtn
              onClickContent = {() => {}}
              onClickXBtn={() => {}}
              isChecked = {false}
              label = '스터디카페'
            />
            <CheckFilterWithXBtn
              onClickContent = {() => {}}
              onClickXBtn={() => {}}
              isChecked = {false}
              label = '도넛'
            />
            <CheckFilterWithXBtn
              onClickContent = {() => {}}
              onClickXBtn={() => {}}
              isChecked = {false}
              label = '대학로'
            />
            <CheckFilterWithXBtn
              onClickContent = {() => {}}
              onClickXBtn={() => {}}
              isChecked = {false}
              label = '건대입구'
            />
            
          </div>
          
        </div>
    </div>
  );
};

export default Search;
