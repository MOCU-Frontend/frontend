import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StoreSearchKeyword.module.css';

import { storeRecentSearchData } from '../../../../store/data/storeSearch';
import CheckFilterWithXBtn from '../../../CheckFilter/CheckFilterWithXBtn/CheckFilterWithXBtn';

const StoreSearchKeyword = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>최근 검색어</div>
      <div className={styles.filtersWrapper}>
        {storeRecentSearchData.map((data, index) => (
          <CheckFilterWithXBtn
            key={index}
            onClickContent={() => navigate(data.title)}
            onClickXBtn={() => {}}
            isChecked={false}
            label={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchKeyword;
