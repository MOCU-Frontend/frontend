import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Present.module.css';
import SearchBarHeader from '../../components/SearchBar/SearchBarHeader/SearchBarHeader';
import CheckFilterSelect from '../../components/CheckFilter/Select/CheckFilterSelect';
import { colors } from '../../styles/colors';

const Present = () => {
  const navigate = useNavigate();
  const { searchWord } = useParams();

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <SearchBarHeader
          placeholder="찾고 싶은 선물을 검색해보세요"
          onClickBackBtn={() => navigate('/home')}
          onClickSearchBtn={(value: string) => navigate(`/present/${value}`)}
        />
      </div>

      <div className={styles.filtersWrapper}>
        <CheckFilterSelect
          label="지역"
          isChecked={false}
          border={1}
          borderColor={'sub-purple-light'}
        />
        <CheckFilterSelect
          label="카테고리"
          isChecked={false}
          border={1}
          borderColor={'sub-purple-light'}
        />
        <CheckFilterSelect
          label="가격대"
          isChecked={false}
          border={1}
          borderColor={'sub-purple-light'}
        />
      </div>
    </div>
  );
};

export default Present;
