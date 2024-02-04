import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StoreSearchKeyword.module.css';

import { RecentSearchData } from '../../../../store/data/storeSearch';
import CheckFilterWithXBtn from '../../../CheckFilter/CheckFilterWithXBtn/CheckFilterWithXBtn';

interface Props {
  searchKeywordDataArr: RecentSearchData[];
  handleDeleteSeachKeyword: (index: number) => void;
}

const StoreSearchKeyword: React.FC<Props> = ({
  searchKeywordDataArr,
  handleDeleteSeachKeyword,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.contentRecent}>
      <div className={styles.searchTitle}>최근 검색어</div>
      <div className={styles.filtersWrapper}>
        {searchKeywordDataArr.map((data, index) => (
          <CheckFilterWithXBtn
            key={index}
            onClickContent={() => navigate(data.title)}
            onClickXBtn={() => handleDeleteSeachKeyword(index)}
            isChecked={false}
            label={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreSearchKeyword;
